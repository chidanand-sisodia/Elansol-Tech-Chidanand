const express = require('express');
const User = require('../models/User'); 
const router = express.Router();

// Endpoint to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, '-password'); 
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
