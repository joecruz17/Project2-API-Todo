require('dotenv').config
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.auth = async = async (req, res, next ) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: data._idn}) 
        if(!user){
            throw new Error('bad credentials')
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ message: error.message})
        
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json({ user, token })
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

//acts as middleware to check if user is authoried to do somehting

exports.loginUser = async (req, res) => {
    try {
        const user = await user.findOne({ email: req.body.email})
        if(!user || await bcrypt.compare(req.body.password, user.password)) {
            throw new Error ('invalid login credentials')
        } else {
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }  
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.updateUser = async (req, res) => {
    try {
        const update = Object.keys(req.body)
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.deleteUser = async (req, res) =>{
    try {
        await req.user.deleteOne()
        res.sendStatus('204')
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}