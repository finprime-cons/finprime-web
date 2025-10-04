const { SESClient, SendRawEmailCommand } = require('@aws-sdk/client-ses');
const nodemailer = require('nodemailer');
const path = require('path');
const templateService = require('./templateService');

const sesClient = new SESClient({ region: process.env.AWS_REGION });

// Create a Nodemailer transporter using AWS SES
const transporter = nodemailer.createTransport({
  SES: { ses: sesClient, aws: { SendRawEmailCommand } },
});

// Send email with template and attachments
const sendTemplatedEmail = async (templateName, data, recipient, subject, attachments) => {
  try {
    // Compile HTML template
    const html = await templateService.compileTemplate(templateName, data);
    
    // Create text version (simplified)
    const text = html.replace(/<[^>]+>/g, '');
    
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: recipient,
      subject: subject,
      html: html,
      text: text,
      attachments: attachments,
    };

    return transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Customer confirmation
const sendCustomerConfirmation = async (formData) => {
  const attachments = [{
    filename: 'finprime.png',
    path: path.join(__dirname, '../assets/finprime.png'),
    cid: 'logo',
    contentDisposition: 'inline'
  }];

  return sendTemplatedEmail(
    'customerConfirmation',
    {
      ...formData,
      title: 'Thank You for Your Submission',
      currentYear: new Date().getFullYear()
    },
    formData.email,
    'We\'ve Received Your Submission',
    attachments
  );
};

// Admin notification
const sendAdminNotification = async (adminEmails, formData) => {
  const attachments = [{
    filename: 'finprime.png',
    path: path.join(__dirname, '../assets/finprime.png'),
    cid: 'logo',
    contentDisposition: 'inline'
  }];

  const promises = adminEmails.map(email => 
    sendTemplatedEmail(
      'adminNotification',
      {
        ...formData,
        title: 'New Form Submission'
      },
      email,
      `New Submission: ${formData.companyName}`,
      attachments
    )
  );
  
  return Promise.all(promises);
};

const sendConsultationCustomerConfirmation = async (formData) => {
  const attachments = [{
    filename: 'finprime.png',
    path: path.join(__dirname, '../assets/finprime.png'),
    cid: 'logo',
    contentDisposition: 'inline'
  }];

  return sendTemplatedEmail(
    'consultationCustomerConfirmation',
    {
      ...formData,
      title: 'Thank You for Your Consultation Request',
      currentYear: new Date().getFullYear()
    },
    formData.email,
    "We've Received Your Consultation Request",
    attachments
  );
};

const sendConsultationAdminNotification = async (adminEmails, formData) => {
  const attachments = [{
    filename: 'finprime.png',
    path: path.join(__dirname, '../assets/finprime.png'),
    cid: 'logo',
    contentDisposition: 'inline'
  }];

  const promises = adminEmails.map(email => 
    sendTemplatedEmail(
      'consultationAdminNotification',
      {
        ...formData,
        title: 'New Consultation Request'
      },
      email,
      `New Consultation Request: ${formData.name}`,
      attachments
    )
  );
  
  return Promise.all(promises);
};

module.exports = { 
  sendCustomerConfirmation,
  sendAdminNotification,
  sendConsultationCustomerConfirmation,
  sendConsultationAdminNotification
};