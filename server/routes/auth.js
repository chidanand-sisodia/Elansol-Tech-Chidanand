const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path according to your structure
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: "Login Successful!", user: { email: user.email } });
        } else {
            res.status(401).json({ message: "Invalid credentials!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
