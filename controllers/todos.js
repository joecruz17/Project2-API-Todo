const Todo = require('../models/todo')

exports.create = async function (req, res) {
    try {
        req.body.user = req.body._id
        const todo = await Todo.create(req.body)
        res.json(todo)
        
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.show = async function (req, res){
    try {
        const todo = await Todo.findOne({ _id: req.params.id})
        res.json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.indexComplete = async function(req, res) {
    try {
        const todo = await Todo.find({ completed: true, user: req.user._id})
        res.json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.indexNotComplete = async function(req, res) {
    try {
        const todo = await Todo.find({ completed: false, user: req.user._id  })
        res.json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}
