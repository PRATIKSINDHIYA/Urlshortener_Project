import { Url } from "../Models/Url.js";
import shortid from "shortid";

export const createshorturl =  async (req,res)=>{
    const fullurl = req.body.fullurl;
    const shortcode = shortid();
    const shorturl = `http://localhost:3000/${shortcode}`
    const newdatabaseentry = new Url({
        fullurl:fullurl,
        shortcode:shortcode,
    })
    console.log(newdatabaseentry)
    await newdatabaseentry.save();
    res.render('index.ejs',{shorturl:shorturl})
}

export const redirectshorturl = async(req,res)=>{
    const shortcode = req.params.shortcode;
    const data  = await Url.findOne({shortcode:shortcode});
    if(data){
        console.log(data.fullurl)
        res.redirect(data.fullurl)
    }
    else{
        console.log("url not found!")
    }
    
}