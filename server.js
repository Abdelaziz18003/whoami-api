var express = require("express");
var app = express();

// handle request for the home page
app.get("/", function(req, res) {
    
    // var to store the json response
    var jsonRes = {
        ipaddress: req.headers["x-forwarded-for"] || req.ip,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\(([^)]+)\)/)[1]
    };
    
    // return the response in json format
    res.json(jsonRes);
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("the app i running on Port 8080");
})