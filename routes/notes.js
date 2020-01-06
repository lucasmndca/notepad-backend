const express = require('express')
const router = express.Router()
const Note = require('../models/note')

router.get('/', async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
    } catch (error) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', (req, res) => {
})

router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body
    })

    try {
        const newNote = await note.save()
        res.status(201).json(newNote)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
})

router.put('/:id', (req, res) => {
})

router.delete('/:id', (req, res) => {
})

module.exports = router