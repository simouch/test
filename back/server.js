const express =require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const userRouter =require('./routers/userR');
const placeRouter =require('./routers/placeR');
var cors = require('cors')


const app= express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user',userRouter);
app.use('/place',placeRouter);

mongoose.connect('mongodb+srv://Asma:asma 123@test.7svzg.mongodb.net/db?retryWrites=true&w=majority').then(()=>{
    app.listen(5000);
}).catch(err=>{
    console.log(err);
})


