// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // gets all the beers information from the beerme_db
  app.get("/api/beers/", function(req, res) {
    db.Beers.findAll({})
      .then(function(dbBeers) {
        res.json(dbBeers);

      });

  });

  // Gets the beers by category from beerme_db
  app.get("/api/beers/:category", function(req, res) {
  
    db.Beers.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbBeers) {
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
    })
      .then(function(dbBeers) {
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
      attributes: ['reviews']

    })
      .then(function(dbBeers) {
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
      attributes: ['rating']

    })
      .then(function(dbBeers) {
        res.json(dbBeers);
        console.log(dbBeers);
      });
      
  });




  // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
};
