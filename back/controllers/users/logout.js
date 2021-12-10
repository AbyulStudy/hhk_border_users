module.exports = (req,res) => {
    console.log("./controllers/users/logout.js");

    res.status(205).cookie('hhkToken','',{maxAge:0}).send('Logged out successfully');
}