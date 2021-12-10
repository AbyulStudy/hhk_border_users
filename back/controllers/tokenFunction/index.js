require('dotenv').config();
const { sign, verify } = require('jsonwebtoken')

module.exports = {
    // create AccessToken 
    generateAccessToken : (data) => {
        // jwt.sign(payload, secretOrPrivateKey, [options, callback])
        return sign(data, process.env.ACCESS_SECRET, {expiresIn:"15s"});            
    },
    sendAccessToken : (code, res, accessToken) => {
        res.status(code)
        .cookie('hhkToken',accessToken,{httpOnly:true,secure:true,sameSite:'Strict'})
        .json({message: 'ok'});
    },
    isAuthorized: (req) => {
        
        let cookie;
        try{
            cookie = req.cookies.hhkToken;
            try {
                return verify(cookie,process.env.ACCESS_SECRET);
            } catch (err) {
                return null;
            }
        }catch(err) {
            return null;
        }        
    }
}