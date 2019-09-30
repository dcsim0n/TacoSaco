/**
|--------------------------------------------------
| main Feed controllers
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();

exports.mainFeed = router.get('/', function ( req, res ) {
  res.render('index', { 
    title: 'Express' ,
    tacos: []
  });

});