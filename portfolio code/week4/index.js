let express = require("express");
let fs = require("fs");
let app = express();
// add middle ware function for body parsing
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("hello it is my first express application");
});
app.get("/about", function (req, res) {
    res.send("hello this is my first about page");
});

app.get("/GetStudents", function (req, res) {
    studentdata = {};
    fs.readFile(__dirname + "/" + "Student.json", "utf8", function (err, data) {
        console.log(data);
        res.json({
            status: true,
            Status_Code: 200,
            "requested at": req.localtime,
            requrl: req.url,
            "request Method": req.method,
            studentdata: JSON.parse(data),
        });
    });
});

app.listen(5000, function () {
    console.log("server is running on port 5000");
});
app.get('/GetStudents',function (req,res)
{ studentdata={}
fs.readFile(__dirname + "/" + "Student.json", 'utf8',
function (err, data) { console.log( data );
res.json({ 'status':true, 'Status_Code':200,
'requested at': req.localtime, 'requrl':req.url,
'request Method':req.method, 'studentdata':JSON.parse(
data)});
});
})