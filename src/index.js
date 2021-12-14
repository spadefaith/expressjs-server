const path = require('path');
const express = require('express');
const app = express();
const port = 7845;

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(port, function(err){
    if (err){
        console.log(err.message);
    } else {
        console.log('listening to port ',port);
    };
});


