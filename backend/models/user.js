
const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    password:String,
    // isAdmin:Boolean
})

userSchema.methods.generateAuth = function(){
    return jwt.sign({_id:this._id, name:this.name},'jwtPrivateKey')
}

function Validate(user){
    const schema = {
        email:Joi.string().min(3).required().email(),
        name:Joi.string().min(3).required(),
        password:Joi.string().min(3).required(),
        // isAdmin:Joi.boolean().required()
    }
    return Joi.validate(user,schema)
}


const User = mongoose.model('User', userSchema)

exports.User = User
exports.validate = Validate