const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    title: { type: String, reqiured: true },
    note: { type: String, required: true },
    id:{type:String,reqiured:true}
})

const todoList = mongoose.model('todoList', todoSchema);
module.exports = todoList;