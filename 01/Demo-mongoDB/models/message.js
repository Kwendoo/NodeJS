const mongoose = require ('mongoose');

const messageSchema = mongoose.Schema({

    title : {
        type : String,
        required : true,
        trim : true
    },
    description :  {
        type : String,
        default : null
    },
    priority : {
        type : Number,
        min : 0,
        max : 5,
        default : 2
    },
    author : {
        type : String,
        required : true,
        immutable : true
    }
}, {
    collection : 'message',
    timestamps : true
});


const Message = mongoose.model('message', messageSchema);
module.exports = Message;