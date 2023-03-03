require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8003 ;
const connectDB = require('./db/connection');
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

const userRoute = require('./routes/userRoutes');
app.use('/user',userRoute)

connectDB();
app.listen(PORT,()=>{
    console.log(`Application was starte on port ${PORT}`);
});