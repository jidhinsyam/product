const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRouter = require('./Router/categoryRouter');
const subcategoryRouter = require('./Router/subcategoryRouter');
const productRouter = require('./Router/productRouter');
const app =express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const mongoDburl="mongodb+srv://jidhinsyam:jidh123@cluster0.ffqekdv.mongodb.net/"
mongoose.connect(mongoDburl,{
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connected");
}).catch((error)=>{
    console.log(error);
});



app.use('/category',categoryRouter)
app.use('/subcategory',subcategoryRouter)
app.use('/product',productRouter)

app.listen(7000,()=>{console.log("server started at http://localhost 7000");})