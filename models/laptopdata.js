const mongoose = require('mongoose')


const laptopSchema = new mongoose.Schema({
    brand:{
        type: String,
        required:true
    },
    processor:{
        type: String,
        required: true
    },
    instock:{
        type: Boolean,
        required:true,
        default: true
    }
})

module.exports = mongoose.model('laptopdata', laptopSchema)