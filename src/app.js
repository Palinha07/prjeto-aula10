const express = require('express');
const app = express();
const agenda = require('./routes/agenda-router');
app.use(express.json()); 
app.use('/',agenda); 

module.exports=app