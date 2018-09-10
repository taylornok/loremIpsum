var db = require("../models");
var path = require("path")


module.exports = function(app) {
  
  // Should be for main page
  app.get("/", function(req, res) {
    res.sendFile(path.resolve("./views/index.html"))
  });
  // This gets the translations page to display it using Express.
  app.get("/translations", function(req, res){
    res.sendFile(path.resolve("./views/translation.html"))
  })
  // For the location page
  app.get("/locations", function(req, res){
    res.sendFile(path.resolve(".views/location.html"))
  })
  //Profile page
  app.get("locations", function(req, res){
    res.sendFile(path.resolve("./views/profile.html"))
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  })
};


