window.onload = function() {
  $(".btn-primary").on("click", function(event) {
    console.log(this);

    var cardName = this.className;
    console.log(cardName); //will show what button beer is being clicked on
    var res = cardName.split(" "); // will split the class string name by spaces
    console.log("with no and hyphen " + res[0]);
    event.preventDefault();
    getCategoyBeer(res[0]);
    // buttonCompare(res[0], cardName);
    // Storing the artist name
  });

  function getCategoyBeer(id) {
    //this grabs the beer and removes hyphens and stores the new parsed word in beerCategory
    var rmHyphen = id.split("-");
    console.log(rmHyphen);
    console.log(rmHyphen.length);
    if (rmHyphen.length === 2) {
      var beerCategory = rmHyphen[0] + " " + rmHyphen[1];
      console.log(beerCategory);
      ajaxGet(beerCategory);
    }
    if (rmHyphen.length === 3) {
      var beerCategory = rmHyphen[0] + " " + rmHyphen[1] + " " + rmHyphen[2];
      console.log(beerCategory);
      ajaxGet(beerCategory);
    }
    if (rmHyphen.length < 2) {
      var beerCategory = id;
      console.log(beerCategory);
      ajaxGet(beerCategory);
    }
  }
  function ajaxGet(beerCategory) {
    //will print out to html with all data of beers
    console.log("there beer goes into ajaxGet(): " + beerCategory);
    $.ajax({
      type: "GET",
      url: "/api/beers/" + beerCategory,
      success: function(result) {
        $(".card-columns").empty();
        $.each(result, function(i, beers) {
          $(".card-columns").append(
            "<div class=card><div class= card-body> <h5 class = card-title>" +
              beers.beername +
              "</h5> <p class = card-text>" +
              "Review of Beer: " +
              beers.reviews +
              "</p>" +
              "<p class = beer-review>" +
              "Rating: " +
              beers.rating +
              " </p> </div> </div>" +
              "<br>"
          );
        });
        console.log("Success: ", result);
      },
      error: function(e) {
        $(".card-columns").html("<strong>Error</strong>");
        console.log("ERROR: ", e);
      }
    });
  }
};
