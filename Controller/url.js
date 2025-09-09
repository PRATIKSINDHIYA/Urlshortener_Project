import { Url } from "../Models/Url.js";
import shortid from "shortid";

export const createshorturl = async (req, res) => {
    const fullurl = req.body.fullurl;
    const shortcode = shortid();
    const shorturl = `https://urlshortener-project-zkct.vercel.app/${shortcode}`;
    
    const newdatabaseentry = new Url({
        fullurl,
        shortcode,
    });

    await newdatabaseentry.save();
    res.render("index.ejs", { shorturl });
};

export const redirectshorturl = async (req, res) => {
    const shortcode = req.params.shortcode;
    const data = await Url.findOne({ shortcode });

    if (data) {
        return res.redirect(data.fullurl);
    } else {
        return res.status(404).send("URL not found!");
    }
};
