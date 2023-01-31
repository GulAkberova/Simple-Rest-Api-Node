const express=require('express')
const { productController } = require('../controller/productController')
const router=express.Router()

router.get('/',productController.getAll)
router.get('/:id',productController.getById)
router.post('/',productController.getByAdd)
router.delete('/:id',productController.getByDelete)
module.exports=router