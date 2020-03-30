const express = require('express'); //function

const app = express(); //object? function?
const port = 4000; //number

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

app.get("/", (req, res) => res.send("hello world")); //function being called

/*serve static files*/
app.use("/static", express.static("public"));

/*routing in express*/
app.use('/', indexRoute);
app.use('/about', aboutRoute);

app.listen(port, () => console.log("hello world running")); //function being called
