const express=require('express');
const studentroutes=require('../routes/studentroutes');
const schoolroutes = require('./schoolroutes');
const sportroutes = require('./sportroutes');

const routes=express.Router();

routes.use('/student',studentroutes);
routes.use('/sportgame',sportroutes);
routes.use('/school',schoolroutes)


module.exports=routes