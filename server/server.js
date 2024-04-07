const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const bcrypt = require('bcrypt');
const userManagement=require('./models/User')
const authRoutes = require('./routes/auth');
const usersRoutes=require('./routes/usersRoute')
require('dotenv').config();

const app = express();

app.use(express.json()); // for parsing application/json
app.use(cors({
    origin:["https://elansol-tech-chidanand.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
}))

mongoose.connect(process.env.MONGODB_URI);

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

app.post('/', async (req, res) => {
    try {
        const { name, dob, email, gender,password } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10); // 10 rounds is generally recommended
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user with hashed password
        const user = await userManagement.create({
            name,
            dob,
            email,
            gender,
            password: hashedPassword // store the hashed password
        });

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


app.listen(5000,()=>{
    console.log("server is running...fine..!")
})