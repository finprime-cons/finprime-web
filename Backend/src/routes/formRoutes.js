const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route to get all form submissions
router.get('/form-submissions', formController.getFormSubmissions);

// Route to submit a form
router.post('/submit-form', formController.submitForm);

// Route to submit a consultation form
router.post('/submit-consultation-form', formController.submitConsultationForm);

module.exports = router;
