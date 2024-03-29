const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://alissonlua:developer369@cluster0-imybg.mongodb.net/fulldb?retryWrites=true&w=majority', 
    { useNewUrlParser: true,
      useUnifiedTopology: true 
})


app.use(express.json())
app.use(routes)

app.listen(3333)