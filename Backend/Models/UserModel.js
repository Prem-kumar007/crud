const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    doctorName: { 
        type: String, 
        required: true, 
     }
}, { timestamps: true });


module.exports =mongoose.model('userdetails',userSchema)
