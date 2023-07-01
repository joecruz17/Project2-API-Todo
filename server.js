require('dotenv').config() // hide information, secret codes
const app = require('./app')
const mongoose = require('mongoose') // mongoose as an ODM Object data modelinglibrary, 
const PORT = process.env.PORT || 6000 // way for us to communicate with the systems, ex: local host
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is good'))

app.listen(PORT, () => {
    console.log(`${PORT}`)
})

