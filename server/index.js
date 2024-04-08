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

const corsConfig={
    origin:"https://elansol-tech-chidanand.vercel.app",
    Credential:true,
    methods:["GET","POST","PUT","DELETE"],
};

app.options("", cors(corsConfig))
app.use(cors(corsConfig));

mongoose.connect(process.env.MONGODB_URI);

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

app.get('/',(req,res)=>{
    res.json("Backend is Working..!");
  })

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