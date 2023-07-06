const Todo = require('../models/todo')
const User = require('../models/user')

exports.create = async function (req, res) {
    try {
        req.body.user = req.body._id
        const todo = await Todo.create(req.body)
        req.user.todo?
        req.user.todos.addToSet({ _id: todo._id}):
        req.user.todos = [{_id: todo._id}]
        req.user.save()
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
       
        const todo = await Todo.find({ completed: true})
        res.json(todo)
        console.log(todo)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.indexNotComplete = async function(req, res) {
    try {
        const todo = await Todo.find({ completed: false })
        res.json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}


exports.update = async function(req, res) {
    try {
        const todo = await Todo.findOneAndUpdate({ _id: req.params.id  }, req.body, { new: true})
        res.json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

exports.delete = async function(req, res) {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.id  })
        res.sendStatus(204)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
}

