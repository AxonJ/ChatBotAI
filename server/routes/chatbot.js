const express = require('express');
const router = express.Router();
const chatbotService = require('../services/chatbotService');

router.post('/message', async (req, res, next) => {
    try {
        const { message } = req.body;
        const response = await chatbotService.getResponse(message);
        res.json({ response });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
