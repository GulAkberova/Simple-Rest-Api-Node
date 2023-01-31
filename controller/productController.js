const { product } = require("../models/Product")

const productController={
    getAll:(req,res)=>{
        product.find({isDeleted:false},function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getById:(req,res)=>{
        let id=req.params.id
        console.log(id,'id');
        
        product.findOne({id,isDeleted:false},function(err,doc){
             if(!err){
                res.json(doc)
              
             }else{
                res.status(500).json(err)
             }
        })

    },
    getByAdd:(req,res)=>{
        let newProduct=new product({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description
        })

        newProduct.save(function(err,doc){
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }

        })


    },
    getByDelete:(req,res)=>{
        let id =req.params.id

        product.findById(id,(err,doc)=>{
            doc.isDeleted=true
            doc.save()
            res.json({'message':'success'})
        })
    },
    getByPut:(req,res)=>{
        
    }

}

module.exports={
    productController
}