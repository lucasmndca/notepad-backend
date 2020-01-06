const port = 4000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = server