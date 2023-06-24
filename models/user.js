require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unqiue: true},
    password:{type: String, required: true}
}, {
    timestamps: true
})

userSchema.pre('save', async function(next){
    this.isModified('modified')? 
    this.password = await bcrypt.hash(this.pasword, 8):
    null;
    next()
})

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({ _id: this._id }, process.env.SECRET)
}

const User = mongoose.model('User', userSchema)

module.exports = User