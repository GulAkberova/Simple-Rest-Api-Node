const { default: mongoose, model } = require("mongoose");

const {Schema}=mongoose

const productSchema=Schema({
    name:String,
    price:Number,
    description:String,
    isDeleted:{type:Boolean, default:false}
})



const product=mongoose.model('Product',productSchema)

// const newProduct= new product({
//     name:'BMW',
//     price:11,
//     description:'Helooo BMW'
// })
// newProduct.save()

module.exports={
    product
}