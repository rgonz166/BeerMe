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
  //-----------------------
  //I am going to need to use this "/api/beers/:category" to print out all the beers
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
    // var name = re.params.category;
    //here(name); //USE THIS TO GET CATEGORY----------------------
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

  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // ===========================================================================
  //                          Users - Logging in to Database
  // ===========================================================================

  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (users) {
      res.json(users);
    });
  });

  app.get("/api/users/:user", function(req, res) {
    db.User.findOne({
      where: {
        username: req.params.user
      }
    }).then(function(userDb) {
      res.json(userDb);
    });
  });

  // ===========================================================================
  //                          Posts - Storing to Database
  // ===========================================================================

  // Add post to database
  app.post("/api/post", function(req, res) {
    console.log(req.body);
    db.Post.create({
      username: req.body.username,
      category: req.body.category,
      beerName: req.body.beerName,
      review: req.body.review,
      rating: req.body.rating
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts", function(req, res) {
    db.Post.findAll({
      order:[['id','DESC']]
    }).then(function(posts) {
      res.json(posts);
    });
  });
  // Update post to database

  // delete a post
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (deleted) {
      console.log('Deleted');
    });
  });
};
