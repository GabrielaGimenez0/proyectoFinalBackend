const express = require("express")
const router = express.Router()

const products = []

router.get("/products", (req, res)=>{
    res.json(products)
})

router.get("/products/:id" , (req,res) =>{
    const productId = parseInt(req.params.id)
    const product = products.find((product)=> product.id === productId)
    if(product){
        res.json(product)
    }else{
        res.status(404).json ({ messaje: "Producto no encontrado"})
    }
})

router.post("/products", (req,res)=>{
    const newProduct = req.body
    products.push(newProduct)
    res.json({ message: "Producto agregado"})
})