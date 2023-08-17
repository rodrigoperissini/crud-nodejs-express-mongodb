const dbClient = require('../../db')
const mongodb = require('mongodb')

const COLLECTION = 'produtos'

async function list() {
    const db = dbClient.connect()
    return db.collection(COLLECTION).find().toArray()
}

async function create(produto) {
    const db = dbClient.connect()
    return db.collection(COLLECTION).insertOne(produto)
}

async function delet(id) {
    const db = dbClient.connect()
    return db.collection(COLLECTION).deleteOne({_id: new mongodb.ObjectId(id)})
}

async function find(id) {
    const db = dbClient.connect()
    return db.collection(COLLECTION).findOne({_id: new mongodb.ObjectId(id)})
}

async function update(id, body) {
    const db = dbClient.connect()
    const filter = { _id: new mongodb.ObjectId(id)}
    const query = {
        $set: {
            nome: body.nome,
            quantidade: body.quantidade
        },
    }
    return db.collection(COLLECTION).updateOne(filter, query)
}

module.exports = {
    list,
    create,
    delet,
    find,
    update
}