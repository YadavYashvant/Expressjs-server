import express, { response } from 'express';

const app = express();

// View engine
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index", {name: "Yashvant"});
});

app.listen(5000, () => {
    console.log("app is running");
});