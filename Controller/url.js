import { Url } from "../Models/Url.js";
import shortid from "shortid";



export const createshorturl = async (req, res) => {
    try {
        const fullurl = req.body.fullurl;
        const shortcode = shortid();
        const shorturl = `https://urlshortener-project-zkct-git-main-pratik-sindhiyas-projects.vercel.app/${shortcode}`;
        
        const newdatabaseentry = new Url({
            fullurl,
            shortcode,
        });

        await newdatabaseentry.save();
        res.render("index.ejs", { shorturl });
    } catch (err) {
        console.error("Error creating short URL:", err);
        res.status(500).send("Internal Server Error");
    }
};

export const redirectshorturl = async (req, res) => {
    try {
        const shortcode = req.params.shortcode;
        const data = await Url.findOne({ shortcode });

        if (data) {
            return res.redirect(data.fullurl);
        } else {
            return res.status(404).send("URL not found!");
        }
    } catch (err) {
        console.error("Error redirecting:", err);
        res.status(500).send("Internal Server Error");
    }
};
