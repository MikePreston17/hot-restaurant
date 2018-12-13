// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", function(req, res) {

});

// Displays all characters
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Displays a single reservation, or shows "No reservation found"
app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.send("No reservation found");

});

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function(req, res) {
  var newreservation = req.body;

  console.log(newreservation);

  reservations.push(newreservation);

  res.json(newreservation);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
