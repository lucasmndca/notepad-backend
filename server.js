require('dotenv').config()

const express = require('express')
const app = express()
const Note = require('./models/note')
const mongoose = require('mongoose')

//Database connection
mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Successfully connected to database'))

//Setting up the server to accept JSON
app.use(express.json())

//Telling the server that we have routes
const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)

//Server listens to port 4000. Returns a confirmation message upon success
app.listen(3000, () => console.log('Server running on port 4000'))

