require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6000
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is good'))

app.listen(PORT, () => {
    console.log(`${PORT}`)
})

