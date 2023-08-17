const express = require('express')
const router = express.Router()
const queries = require('./queries')

//create
router.post('/', async (req,res) => {
    const result = await queries.create(req.body)
    res.status(201).json({success_message: "Produto criado com sucesso!"})
})

//list
router.get('/', async (req,res) => {
    const produtos = await queries.list()
    res.status(200).json(produtos)
})

//delete
router.delete('/:id', async (req,res) => {
    const id = req.params.id
    const result = await queries.delet(id)
    res.status(201).json({success_message: "Produto deletado com sucesso!"})
})

//find
router.get('/:id', async (req,res) => {
    const id = req.params.id
    const produtos = await queries.find(id)
    res.status(200).json(produtos)
})

//update
router.patch('/:id', async (req,res) => {
    const id = req.params.id
    const body = req.body
    const produtos = await queries.update(id, body)
    res.status(200).json(produtos)
})

module.exports = router