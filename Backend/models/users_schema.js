const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }

    // I will add This later
    // Maybe during the order time

    // address: {
    //     street: { type: String },
    //     city: { type: String },
    //     state: { type: String },
    //     country: { type: String },
    //     zip: { type: String }
    // },
    // role: { type: String, enum: ['user', 'admin'], default: 'user' },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
