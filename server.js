const express = require('express')
	
require('dotenv').config();
const app = express();
const mainPath = '/api'
const produtosController = require('./src/produtos/controller')

app.use(express.json());

app.use(mainPath+'/produtos', produtosController)

app.listen(3030, () =>{
    console.log('listening on port 3030')
})