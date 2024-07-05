// Model for add functionality


// Later on i have to add data association feature for categoriacal storage- 

//codeforce- {Solved questions: 000, date: xyz}
//leetcode- {Solved questions: 000, date: xyz}
// It will be beneficial in making graph
const mongoose = require('mongoose');

const addSchema= mongoose.Schema({
    questions: {
        type: Number,
        required: true,
    },
    platform:  {
        type: String,
        required: true,
    }
})

module.exports= mongoose.model('ADD',addSchema);