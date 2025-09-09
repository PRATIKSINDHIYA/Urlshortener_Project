import mongoose from "mongoose";

const urlschema = new mongoose.Schema({
    fullurl:String,
    shortcode:String
})

export const Url = new mongoose.model("Url",urlschema);