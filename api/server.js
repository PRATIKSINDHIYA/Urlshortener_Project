import express from 'express'
import mongoose from 'mongoose';
import shortid from 'shortid';
import {Url} from '../Models/Url.js'
import { createshorturl } from '../Controller/url.js';
import { redirectshorturl } from '../Controller/url.js';

const app = express();

mongoose.connect("mongodb+srv://mydatabase:myrealdatabase@cluster0.nzmws71.mongodb.net/",{
    dbName:"NodejsMongoCourse"
}).then(()=>console.log("mongodb connected successfully..!")).catch((err)=>console.log(err))

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs',{shorturl:null})
})

app.post('/form-submit',createshorturl)

app.get("/:shortcode",redirectshorturl)

const port = 3000;

// app.listen(port,()=>console.log(`server is running on port ${port}`))
export default app;