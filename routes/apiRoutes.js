// Requiring our Todo model
var db = require("../models");

// Routes
  // ===========================================================================
  //                                    Beers
  // ===========================================================================
module.exports = function(app) {
  // gets all the beers information from the beerme_db
  app.get("/api/beers/", function(req, res) {
    db.Beers.findAll({}).then(function(dbBeers) {
      res.json(dbBeers);
    });
  });

  // Gets the beers by category from beerme_db
  app.get("/api/beers/:category", function(req, res) {
    db.Beers.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbBeers) {
      res.json(dbBeers);
      console.log(req.params.category);
    });
  });

  // Gets a single beer from beerme_db
  app.get("/api/beers/:beername", function(req, res) {
    // var queryVar = req.params.beername
    db.Beers.findOne({
      where: {
        beername: req.params.beername
      }
    }).then(function(dbBeers) {
      res.json(dbBeers);
      console.log(req.params.beername);
    });
  });
  //get review of specified beer
  app.get("/api/beers/:beername/reviews", function(req, res) {
    // var queryVar = req.params.beername
    // sParameter = encodeURIComponent(sParameter.trim(req.params.beername))

    db.Beers.findOne({
      where: {
        beername: req.params.beername
      },
      attributes: ["reviews"]
    }).then(function(dbBeers) {
      res.json(dbBeers);
      console.log(dbBeers);
    });
  });
  //get the rating on the specified beer
  app.get("/api/beers/:beername/rating", function(req, res) {
    // var queryVar = req.params.beername
    db.Beers.findOne({
      where: {
        beername: req.params.beername
      },
      attributes: ["rating"]
    }).then(function(dbBeers) {
      res.json(dbBeers);
      console.log(dbBeers);
    });
  });

  // add a new beer
  app.post("/api/beers", function(req, res) {
    db.Beers.create({
      category: req.body.category,
      beername: req.body.beername,
      reviews: req.body.reviews,
      rating: req.body.rating
    }).then(function(dbBeers) {
      res.json(dbBeers);
    });
  });

  // delete a beer
  app.delete("/api/beers/:beername", function(req, res) {
    db.Beers.destroy({
      where: {
        beername: req.params.beername
      }
    }).then(function(dbBeers) {
      res.json(dbBeers);
    });
  });

  // updating beers
  app.put("/api/beers", function(req, res) {
    db.Beers.update(req.body, {
      where: {
        beername: req.body.beername
      }
    }).then(function(dbBeers) {
      res.json(dbBeers);
    });
  });
  
  // ===========================================================================
  //                          Users - Storing to Database
  // ===========================================================================

  // app.get("/api/users", function(req,res){
  //   db.User.findAll({}).then(function(users){
  //     res.json(users);
  //   });
  // });

  // Get username and check password
  app.get("/api/users/:user", function(req,res){
    db.User.
  })

  app.post("/api/user",function(req, res){
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

  // ===========================================================================
  //                          Users - Logging in to Database
  // ===========================================================================




  // ===========================================================================
  //                          Posts - Storing to Database
  // ===========================================================================

  // Add post to database
  app.post("/api/post",function(req,res){
    console.log(req.body);
    db.Post.create({
      userId: req.body.userId,
      category: req.body.category,
      beerName: req.body.beerName,
      review: req.body.review,
      rating: req.body.rating
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });

  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (posts) {
      res.json(posts);
    });
  });
  // Update post to database

};
