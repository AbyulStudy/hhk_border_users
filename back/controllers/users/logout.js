module.exports = (req,res) => {
    let backURL=req.header('Referer') || '/';
    if( backURL.includes('github.io') ) backURL += 'simpleboard-test/';
    backURL += 'index.html';
    res.cookie('hhkToken', '', { maxAge: 0} );
    return res.redirect(backURL);
}
