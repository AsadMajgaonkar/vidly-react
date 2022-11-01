
const jwt = require('jsonwebtoken')

function Authenticate(req,res,next){
    const token = req.header('x-auth-token')

    if(!token) return res.status(401).send('no token provided')

    try{
        const decoded = jwt.verify(token,'jwtPrivateKey')
        req.user = decoded
        
    }
    catch(err){
        res.status(400).send('invalid token')
    }

    next()
    
}

 module.exports = Authenticate