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
    res.redirect("/profile")
  })

  // For the location page
  app.get("/locations", function (req, res) {
    res.sendFile(path.resolve("./views/location.html"))
  })
  //Profile page
  app.get("/profile", function (req, res) {
    try {
      req.user = JSON.parse(req.cookies["userinfo"])
      console.log(req.user);

      if (req.user["username"] != "") {
        res.render("profile", req.user)
      } else {
        res.redirect("/signup")
      }
    } catch (error) {
      res.redirect("/signup")
    }
  })
  app.post("/profile", function (req, res) {
    console.log(req.user);
    try {
      req.user = JSON.parse(req.cookies["userinfo"])
      if (req.user["username"] != "") {
        res.render("profile", req.user)
      } else {
        res.redirect("/signup")
      }
    } catch (error) {
      res.redirect("/signup")
    }
  })


  //console.log('Cookies: ', req.cookies);
  /*   try {
      if (req.cookies["userinfo"] == undefined) {
        res.redirect("/signup")
      } else {
        res.sendFile(path.resolve("./views/profile.html"))
      }
    } catch (error) {
      res.redirect("/signup")
    } */

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