const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/submit', async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            preferredContact,
            newsletter,
            message
        } = req.body;

        // Create new contact submission
        const contact = new Contact({
            name,
            email,
            phone,
            preferredContact,
            newsletter: newsletter === 'yes',
            message
        });

        // Save to database
        await contact.save();

        res.status(200).json({ 
            success: true, 
            message: 'Contact form submitted successfully' 
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error submitting form' 
        });
    }
});

module.exports = router; 