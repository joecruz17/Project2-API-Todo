const { model, Schema } = require('mongoose')
const mongoose = require('mongoose')
const todoSchema = new Schema({
    title: {type :String, required: true },
    completed: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}, //allows us everytime we create a todo, it will belong to a certain user
    todos: { type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }
},{
    timestamps: true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo
