
const express = require('express');
const path = require('path')
const app = express();
//Setting
app.set('port',3000);
app.set('views', path.join(__dirname,'views'));
app.engine('htm',require('ejs').renderFile);
app.set('view engine','ejs'); 

//routes
app.use(require('./routes/routes'));

//staticfile
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'),'192.168.1.154',() => {
    console.log("escuchando por el puerto",app.get('port'));
});
console.log("servidor trabajando");