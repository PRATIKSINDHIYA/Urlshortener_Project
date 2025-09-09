import express from "express";
import mongoose from "mongoose";
import { createshorturl, redirectshorturl } from "../Controller/url.js";

const app = express();

// MongoDB connection
mongoose.connect("mongodb+srv://mydatabase:myrealdatabase@cluster0.nzmws71.mongodb.net/", {
    dbName: "NodejsMongoCourse"
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("index.ejs", { shorturl: null });
});

app.post("/form-submit", createshorturl);

app.get("/:shortcode", redirectshorturl);

export default app;
