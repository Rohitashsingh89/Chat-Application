const mongoose = require("mongoose");
const User = require("./user.js");

const messageSchema = mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : User
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
    content : String,
    timestamp : {
        type : Date,
        default : Date.now
    },
});

const Messages = mongoose.model('messages', messageSchema);

module.exports = Messages; 