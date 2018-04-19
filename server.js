var express = require('express')
var app = express();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(__dirname + '/public/dist'));
// configure body-parser to read JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
var dbURI = 'mongodb://localhost/shinto'
mongoose.connect(dbURI);

var User = new mongoose.Schema({
})

// app.get('/transactions/:')
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, () => {
    console.log("listening on port 8000");
});
