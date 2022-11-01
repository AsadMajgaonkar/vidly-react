
const {User} = require('../models/user')
const express = require('express')
const Joi = require('joi');
const router = express.Router();
router.use(express.json())

router.post('/', async (req,res)=>{
    const result = validate(req.body)

    if(result.error){
        return res.status(400).send(result.error.details[0].message)
    }

    let user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.status(400).send('Invalid email or password')
    }

    const validPassword = req.body.password==user.password?true:false
    if(!validPassword) {
        return res.status(400).send('Invalid email or password')
    }

    const token = user.generateAuth()
    res.send(token)
})

router.get('/',(req,res)=>{
    res.send('auth')
})

function validate(user){
    const schema = {
        email:Joi.string().min(3).required().email(),
        password:Joi.string().min(3).required()
    }
    return Joi.validate(user,schema)
}


module.exports = router