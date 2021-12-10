require('dotenv').config();
const { sign, verify } = require('jsonwebtoken')

module.exports = {
    // create AccessToken 
    generateAccessToken : (data) => {
        // jwt.sign(payload, secretOrPrivateKey, [options, callback])
        return sign(data, process.env.ACCESS_SECRET, {expiresIn:"15s"});            
    },
    sendAccessToken : (code, res, accessToken) => {
        
        res.cookie('hhkToken',accessToken,{httpOnly:true,secure:true,sameSite:'Strict'});
        //토큰을 보낸 뒤 index.html로 리다이렉트 합니다.
        let backURL=req.header('Referer') || '/';
        const fromnow = backURL.lastindexOf('/');
        backURL = backURL.slice(0, fromnow + 1) + 'index.html';
        res.redirect('https://exxocism.github.io/simpleboard-test/');
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