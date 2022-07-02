const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "name is mandatory",
        unique: "name can't be repeated",
        trim: true,
        lowercase: true
    },
    fullName:{
        type: String,
        required: "fullName is mandatory",
        trim: true
    },
    logoLink:{
        type: String,
        required: "logoLink is mandatory",
        trim: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }

},{timestamps:true})

module.exports = mongoose.model("college",collegeSchema)