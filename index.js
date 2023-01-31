const express=require('express')
const { default: mongoose } = require('mongoose')
const productRouter=require('./routes/productRoutes')
var cors = require("cors");
const app=express()
mongoose.connect('mongodb+srv://Gul:3421558Gul@cluster0.oxil0us.mongodb.net/minifullproject')
.then(res=>{
    console.log('connect');
})
.catch(err=>{
    console.log(err);
})

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

app.use(function(req,res,next){
    if(false){
        res.status(401).json('Access error')
    }else{
        next()
    }

})

app.get('/',(req,res)=>{
    res.json('hello')
})

app.use('/products',productRouter)
app.listen(8080)
