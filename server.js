const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' })
const data = require("./model/schema");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.mongodb_db).then(() => {
    console.log("connected database")
}).catch((e) => {
    console.log("data part", e);
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post("/comment", async(req, res) => {
    try {
        const { name, email, comment } = req.body;
        console.log(name)
        if (!name || !email || !comment) {
            res.status(422).json("empty data")
        }

        const baba = new data({ name, email, comment });
        await baba.save();
        res.status(201).json("ok data")

    } catch (e) {
        console.log("outer site", e);
        res.status(422).json("outer site")

    }
})

//for heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}


app.listen(port, () => {
    console.log("server is runnign ", port)
})