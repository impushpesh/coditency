const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/coditency/task');

const TaskSchema= mongoose.Schema({
    title: String,
    description: String,
})

module.exports=mongoose.model('Task', TaskSchema);