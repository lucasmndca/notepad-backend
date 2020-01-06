const mongoose = require('mongoose')
const url = 'url will go here. I dont have mongodb installed rn'

module.exports = mongoose.connect(url, {useNewUrlParser: true})