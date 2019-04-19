const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProfileSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    identity:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    }
})

module.exports = ProfileMsg = mongoose.model("profile",ProfileSchema);