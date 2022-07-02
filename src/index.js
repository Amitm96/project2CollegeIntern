const express = require('express');
const bodyParser = require('body-parser');
const {default: mongoose} = require('mongoose');
const route = require('./routes/route')
const multer = require('multer')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer().any())

mongoose.connect("mongodb+srv://Amitmaz96:FuYghhKoFzigilxK@cluster1.mdpsbcj.mongodb.net/collegeInterng7DB?retryWrites=true&w=majority",{useNewUrlParser: true})
.then(()=>console.log("MongoDb is connected"))
.catch(error=>console.log(error))

app.use('/', route)

app.listen(process.env.PORT || 3000, function (){
     console.log('Express app running on port' + (process.env.PORT || 3000))
});
