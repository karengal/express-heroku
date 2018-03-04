var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');   //add this line

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));   //add this line
app.use(bodyParser.json());  //add this line

app.use(express.static('public'));
app.get('/', function(request, response){
    console.log("Hello World");
  });

  app.listen(8000);

  // app.get('/:whattheuserwants', function(req, res){
  //   var whattheuserwants = req.params.whattheuserwants;
  
  //   if(whattheuserwants == "about"){
  //     res.send({data: "We are cool"})
  //   } else if(whattheuserwants == "help"){
  //     res.send({message: "We are here to help you because we are cool"})
  //   } else{
  //     res.send({error: "Sorry, not understood- not cool!"});
  //   }
  // });

  // app.get('/names/:name', function(request, response){
  //   response.send("Hello " + request.params.name);
  // });

  // app.get('/books', function(request, response) {
  //   var genretosearch = request.query.genre;
  //   var authortosearch = request.query.author;
  //   //let's pretend we have a function that queries our database and returns what it finds
  //   var results = {genre:"fiction", author: "Hamingway"};    
  //     response.send(results);
   
  // });
  
  // app.post('/users', function(req, res) {
  //   console.log(req.body); //the data on a new book
  //   res.send("From server route");
  // }); 

  // request('http://www.elevationacademy.co', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body) // Shows the HTML for the EA homepage. 
  //   }
  // })

  // app.post('/weather', function(req, res) {
  //   console.log(req.body); //the data on a new book
  //   res.send("From server route");
  // }); 

  // request('http://api.openweathermap.org/data/2.5/weather?q=' +
  // 'London&appid=d703871f861842b79c60988ccf3b17ec', function(req, res){
  //   if (!error && response.statusCode == 200) {
  //        console.log(body) // Shows the HTML for the EA homepage. 
  //       }
  // });
  // app.post('/weather', function(req, res) {
  //   console.log(req.body); //the data on a new book
  //   // let's pretend we have a function to create a new book
  //   createNewBook(req.body, function(error, result){
  //     if (error) throw error;
  //     res.send(result);
  //   });
  // }); 

 
 