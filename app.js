const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb://localhost:27017/dev';
app.use(express.json())
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})



const apiRouters = require('./routes/apis')
app.use('/apis',apiRouters)

app.listen(9000, () => {
    console.log('Server started')
})