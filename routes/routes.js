const express = require('express')
const produto = require('../models/Produto')
const router = express.Router()


router.get('/', function (req,res){
    res.json({})
})
router.get('/Produto', async function (req,res){
    res.json(await produto.find())
})
router.post('/Produto', async function (req,res){
    res.json(await produto.create(req.body))
})
router.get('/Produto/:id', async function (req,res){
    res.json(await produto.findbyId(req.params.id))
})
router.delete('/Produto/:id', async function (req,res){
    res.json(await produto.findbyIdAndDelete(req.params.id))
})

router.put('/Produto/:id', async function (req,res){
    res.json(await produto.findbyIdAndUpdate(req.params.id, req.body))
})

module.exports = router