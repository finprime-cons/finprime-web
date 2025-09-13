const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const juice = require('juice'); // For inlining CSS

// Register partials
const registerPartials = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      registerPartials(filePath);
    } else if (file.endsWith('.html')) {
      const partialName = path.basename(file, '.html');
      const content = fs.readFileSync(filePath, 'utf8');
      handlebars.registerPartial(partialName, content);
    }
  });
};

// Register helpers
const registerHelpers = () => {
  handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
  });
};

// Initialize template engine
const initTemplates = () => {
  const templatesDir = path.join(__dirname, '../templates');
  
  // Register partials from all directories
  registerPartials(templatesDir);
  
  // Register helpers
  registerHelpers();
  
  console.log('Templates initialized');
};

// Compile template with data
const compileTemplate = async (templateName, data) => {
  try {
    // Load main template
    const templatePath = path.join(
      __dirname, 
      `../templates/${templateName}.html`
    );
    
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Compile with Handlebars
    const template = handlebars.compile(templateContent);
    const html = template(data);
    
    // Inline CSS with Juice
    const inlinedHtml = juice(html, {
      extraCss: getTemplateCss(templateName),
      preserveMediaQueries: true,
      removeStyleTags: false
    });
    
    return inlinedHtml;
  } catch (error) {
    console.error('Template compilation error:', error);
    throw error;
  }
};

// Get CSS for a specific template
const getTemplateCss = (templateName) => {
  try {
    // Get shared CSS
    // const sharedCssPath = path.join(__dirname, '../templates/shared/styles.css');
    // let css = fs.readFileSync(sharedCssPath, 'utf8');
    
    // Get template-specific CSS
    const templateCssPath = path.join(
      __dirname, 
      `../templates/${templateName}.css`
    );
    
    let css = '';
    if (fs.existsSync(templateCssPath)) {
      css = fs.readFileSync(templateCssPath, 'utf8');
    }
    
    return css;
  } catch (error) {
    console.error('Error loading CSS:', error);
    return '';
  }
};

module.exports = {
  initTemplates,
  compileTemplate
};