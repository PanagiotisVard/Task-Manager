const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name: {
        type: String,
        trim: true
    },email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value <0 ){
                throw new Error('Age must be a positive number!')
            }
        }
    },
    password:{
        type: String,
        trim: true,
        validate(code){
            if (!validator.isLength(code, { min: 6 })) {
                throw new Error('Password should be at least 6 characters long.')
            }
            if (code.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the word "password".')
            }
        }
    }
})



module.exports = User