var db = require("../models");
var path = require("path");



module.exports = function (app) {

  // Should be for main page
  app.get("/", function (req, res) {
    res.sendFile(path.resolve("./views/index.html"))
  });
  // This gets the translations page to display it using Express.
  app.get("/translations", function (req, res) {
    res.sendFile(path.resolve("./views/translation.html"))
  })
  // For the location page
  app.get("/locations", function (req, res) {
    res.sendFile(path.resolve(".views/location.html"))
  })
  //Profile page
  app.get("/profile", function (req, res) {
    res.sendFile(path.resolve("./views/profile.html"))
  })

  app.get("/public/styles/main.css", function (req, res) {
    res.sendFile(path.resolve("./public/styles/main.css"))
  })

  // Load example page and pass in an example by id
  /*   app.get("/example/:id", function (req, res) {
      db.Example.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (dbExample) {
        res.render("example", {
          example: dbExample
        });
      });
    });
    */

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};