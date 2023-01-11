const express = require("express");
const bodyParser = require("body-parser");
const events_router = require("./routes/events_router");
const incidents_router = require("./routes/incidents_router");
const app = express();

app.use(bodyParser.json()); // parse incoming JSON data

app.use((req, res, next) => {
  //middleware to solve CORS error
  res.setHeader("Access-Control-Allow-Origin", "*"); //allow origins to access my data
  res.setHeader("Access-Control-Allow-Methods", "GET"); //allow origins to use my HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization"); //allow origins to use certain headers
  next(); //the request can now continue
});

app.use("/events", events_router); 
app.use("/incidents", incidents_router); 

app.listen(8080);