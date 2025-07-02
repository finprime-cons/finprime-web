const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const templateService = require('./templateService');
const s3Service = require('./s3Service');

const sesClient = new SESClient({ region: process.env.AWS_REGION });

// Send email with template
const sendTemplatedEmail = async (templateName, data, recipient, subject) => {
  try {
    // Compile HTML template
    const html = await templateService.compileTemplate(templateName, data);
    
    // Create text version (simplified)
    const text = html.replace(/<[^>]+>/g, '');
    
    const params = {
      Source: process.env.FROM_EMAIL,
      Destination: { ToAddresses: [recipient] },
      Message: {
        Subject: { Data: subject },
        Body: {
          Html: { Data: html },
          Text: { Data: text }
        }
      }
    };

    return sesClient.send(new SendEmailCommand(params));
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Customer confirmation
const sendCustomerConfirmation = async (formData) => {
  // const imageUrl = await s3Service.getPresignedImageUrl(
  //   process.env.S3_BUCKET, 'thankyoiu.png');
  formData.imageUrl = 'https://finprime-assets.s3.ap-northeast-1.amazonaws.com/thankyoiu.png';

  return sendTemplatedEmail(
    'customerConfirmation',
    {
      ...formData,
      title: 'Thank You for Your Submission'
    },
    formData.email,
    'We\'ve Received Your Submission'
  );
};

// Admin notification
const sendAdminNotification = async (adminEmails, formData) => {
  // const imageUrl = await s3Service.getPresignedImageUrl(
  //   process.env.S3_BUCKET, 'mail.png');
  formData.imageUrl = 'https://finprime-assets.s3.ap-northeast-1.amazonaws.com/mail.png'

  const promises = adminEmails.map(email => 
    sendTemplatedEmail(
      'adminNotification',
      {
        ...formData,
        title: 'New Form Submission'
      },
      email,
      `New Submission: ${formData.companyName}`
    )
  );
  
  return Promise.all(promises);
};

module.exports = { 
  sendCustomerConfirmation,
  sendAdminNotification
};