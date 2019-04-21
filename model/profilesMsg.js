const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProfileSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    date:{
        type:Array,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    idCard:{
        type:String,
        required:true
    },
    FAB:{
        type:Boolean,
        required:true
    },
    remarks:{
        type:String
    }
})

module.exports = ProfileMsg = mongoose.model("profile",ProfileSchema);