import express, { response } from 'express';
import path from 'path';

const app = express();

app.get("/", (req,res) => {

    const pathlocation = path.resolve();

    res.sendFile(path.join(pathlocation, "./index.html"));

    /* res.json({
        success: true,
        products: [
            'Yashvant Yadav',
            'B.Tech',
            'Computer Science'
        ],
    }); */
});

app.listen(5000, () => {
    console.log("app is running");
});