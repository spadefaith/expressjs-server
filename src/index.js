const express = require('express');
const app = express();
const port = 7845;

app.use('/', function(req, res, next){
    res.json({message:'hello world'});
});

app.listen(port, function(err){
    if (err){
        console.log(err.message);
    } else {
        console.log('listening to port ',port);
    };
});


