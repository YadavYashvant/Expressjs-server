import express, { response } from 'express';
import path from 'path';

const app = express();

const users = [];


//using middlewares
app.use(express.static(path.join(path.resolve(), "public"))); // Static files

app.use(express.urlencoded({extended: true})); // Body parser

// View engine
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index", {name: "Yashvant"});
    /* res.sendFile("styles.css"); */
});

app.get("/success", (req,res) => {
    res.render("success");
    /* res.sendFile("styles.css"); */
});

app.get("/users", (req,res) => {
    res.json({
        users
    });
});

app.post("/", (req,res) => {
    users.push({username: req.body.name, email: req.body.email});

    res.redirect("/success");
});


app.listen(5000, () => {
    console.log("app is running");
});