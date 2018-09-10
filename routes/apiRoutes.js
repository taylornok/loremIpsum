var translation = require("../scripts/translation.js");

module.exports = function(app) {

  //FTranslation page API routes
  app.post("/api/translation", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    console.log(req.body)

   translation.translate(req.body, function(result){
      res.json(result)
   })
  });

  // Delete a favorite location by id -- Need to add in
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
