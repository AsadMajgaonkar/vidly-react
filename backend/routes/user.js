
const {User, validate} = require('../models/user')
const Authenticate = require('../middleware/authenticate')
const express = require('express');
const router = express.Router();
router.use(express.json())

//Getting current User
// router.get('/me', Authenticate, async (req,res)=>{
//     const user = await User.findById(req.user._id).select('-password')
//     res.send(user)
// })

//Creating new User
router.post('/', async (req,res)=>{
    const result = validate(req.body)

    if(result.error){
        console.log('reached')
        return res.status(400).send(result.error.details[0].message)
        
    }

    let user = await User.findOne({email: req.body.email})
    if(user) {
        return res.status(400).send('email already registered')
    }

    user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        // isAdmin:req.body.isAdmin
    })

    await user.save()
    const token = user.generateAuth()

    res.header('x-auth-token',token).send(token)
    // res.send('success signup')
})

router.get('/',(req,res)=>{
    res.send('User')
})

module.exports = router