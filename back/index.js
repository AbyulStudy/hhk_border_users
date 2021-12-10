/*
  npm install
    - dotenv
    - cors
*/
const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const borderRouter = require('./routes/border');

const HTTPS_PORT = process.env.HTTPS_PORT || 4500;

app.use(express.json());
app.use(cookieParser());
app.get('/',(req,res) => {
  res.send(`
    https://localhost:4500/index/
    https://localhost:4500/users/
    https://localhost:4500/users/login
    https://localhost:4500/users/logout
    https://localhost:4500/users/signup
    https://localhost:4500/border/
    https://localhost:4500/border/list
    https://localhost:4500/border/write
    https://localhost:4500/border/modify
    https://localhost:4500/border/delete
  `)
})
app.use('/index', indexRouter);
app.use('/users',usersRouter);
app.use('/border',borderRouter);


let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning : https://localhost:',HTTPS_PORT));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning : https://localhost:',HTTPS_PORT));
}