const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("Hola GET")
})

app.post('/',(req, res) =>{
    res.send('Hola POST')
})

app.patch('/',(req, res) =>{
    res.send('Hola PATCH')
})

app.put('/',(req, res) =>{
    res.send('Hola PUT')
})

app.delete('/',(req, res) =>{
    res.send('Hola DELETE')
})