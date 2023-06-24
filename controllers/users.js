require('dotenv').config
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.auth = async = async (req, res, next ) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: data._idn})
    } catch (error) {
        
    }
}

//acts as middleware to check if user is authoried to do somehting