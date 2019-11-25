// const express=require("express");
// const app = express();
//
// //app.use(express.urlencoded({extended:true}));
//
// const bodyparser = require("body-parser");
//
//
//
// app.listen(3005, (error) => {
//   if(error) {
//     console.log(error);
//   }
// })


// const app = require("express")();
const express = require("express");
const app = express();

const request = require("request");

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// allow to serve static files from here
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});

// // query string
// // /about?firstName=______&lastName=_________
// app.get("/about", (req, res) => {
//     res.send(req.query.firstName + " " + req.query.lastName);
// });
//
// app.get("/aboutme", (req, res) => {
//     const response = {
//         firstName: "Me",
//         lastName: "Mee"
//     };
//     res.json(response);
// });
//
// // Request parameter / URL parameter
// app.get("/age/:myAge/:height", (req, res) => {
//     res.send(req.params.myAge);
// });
//
// app.post("/myfavoriteanimal", (req, res) => {
//     res.send("Your favorite animal is: " + req.body.favoriteAnimal);
// });
//
// app.get("/server-side-request", (req, res) => {
//     request('http://www.google.com', function (error, response, body) {
//         console.log('error:', error); // Print the error if one occurred
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         // console.log('body:', body); // Print the HTML for the Google homepage.
//         res.send(body);
//       });
// });

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server ", error);
    }
    console.log("The server is running on port ", server.address().port);
});
