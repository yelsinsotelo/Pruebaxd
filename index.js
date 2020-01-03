const express = require('express');

const app = express();
app.get('/',(req,res) => {
    res.end("hola");
});
app.listen(3000,() => {
    console.log('server port 30000');
});