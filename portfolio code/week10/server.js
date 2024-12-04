var express = require("express");
let Books = require("./schema");
let mongodbConnected = require("./connection");

const cors = require("cors");

var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
    res.send("Hi welcome to the library application");
});

app.get("/allbooks", function (req, res) {
    Books.find().then((allbooks) => {
        res.json(allbooks);
    });
});

app.post("/addbooks", function (req, res) {
    console.log("Ref", req.body);
    let newbook = new Books(req.body);
    console.log("newbook->", newbook);
    newbook
        .save()
        .then((todo) => {
            res.status(200).json({ books: "book added successfully" });
        })
        .catch((err) => {
            res.status(400).send("adding newbook failed");
        })
    })


    app.listen(5000, function () {
        console.log("Server is running the port 5000");
    });

