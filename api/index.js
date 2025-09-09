import express from "express";
import mongoose from "mongoose";
import { createshorturl, redirectshorturl } from "../Controller/url.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";    
dotenv.config();

const app = express();



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "../views")); // ab correct folder milega


mongoose.connect(process.env.MONGO_URI, {
  dbName: "NodejsMongoCourse"
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));


app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("index.ejs", { shorturl: "" });
});


app.post("/form-submit", createshorturl);

app.get("/:shortcode", redirectshorturl);

export default app;
