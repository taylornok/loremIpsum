var db = require("../models");
var path = require("path");


module.exports = function (app) {

 

  // This gets the translations page to display it using Express.
  app.get("/translation", function (req, res) {
    res.sendFile(path.resolve("./views/translation.html"))
  })
  app.get("/signup", function (req, res) {
    res.sendFile(path.resolve("./views/signup.html"))
  })
  app.get("/login", function (req, res) {
    res.sendFile(path.resolve("./views/login.html"))
  })

  // For the location page
  app.get("/locations", function (req, res) {
    res.sendFile(path.resolve("./views/location.html"))
  })
  //Profile page
  app.get("/profile", function (req, res) {

   
    console.log('Cookies: ', req.cookies);
    try {
      if (req.cookies["userinfo"] == undefined) {
        res.redirect("/signup")
      } else {
        res.sendFile(path.resolve("./views/profile.html"))
      }
    } catch (error) {
      res.redirect("/signup")
    }
  })
  app.post("/profile", function (req, res) {

   
    console.log('Cookies: ', req.cookies);
    try {
      if (req.cookies["userinfo"] == undefined) {
        res.redirect("/signup")
      } else {
        res.sendFile(path.resolve("./views/profile.html"))
      }
    } catch (error) {
      res.redirect("/signup")
    }
  })

  app.get("/public/styles/main.css", function (req, res) {
    res.sendFile(path.resolve("./public/styles/main.css"))
  })

  app.get("/public/js/geolocation.js", function (req, res) {
    res.sendFile(path.resolve("./public/js/geolocation.js"))
  })

  app.get("/public/js/handleTranslation.js", function (req, res) {
    res.sendFile(path.resolve("./public/js/handleTranslation.js"))
  })
   // Should be for main page
   app.get("/*", function (req, res) {
    res.sendFile(path.resolve("./views/index.html"))
  });

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
 
};