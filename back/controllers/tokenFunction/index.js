require('dotenv').config();
const { sign, verify } = require('jsonwebtoken')

module.exports = {
    // create AccessToken 
    generateAccessToken : (data) => {
        // jwt.sign(payload, secretOrPrivateKey, [options, callback])
        return sign(data, process.env.ACCESS_SECRET, {expiresIn:"15s"});            
    },
    sendAccessToken : (req, res, accessToken) => {
        
        res.cookie('hhkToken',accessToken,{ httpOnly:true, secure:true, sameSite:'None' });
        //res.cookie('hhkToken',accessToken,{ httpOnly:true, secure:true, domain: '127.0.0.1', sameSite:'Lax' });
        //토큰을 보낸 뒤 index.html로 리다이렉트 합니다.
        let backURL=req.header('Referer') || '/';
        if( backURL.includes('github.io') ) backURL += 'simpleboard-test/';
        backURL += 'index.html';
        res.redirect(backURL);
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
