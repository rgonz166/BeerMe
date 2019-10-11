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
    // $.get("/api/beers/" + id{

    //   if (data) {
    //     // If this post exists, prefill our cms forms with its data
    //     titleInput.val(data.title);
    //     bodyInput.val(data.body);
    //     postCategorySelect.val(data.category);
    //     // If we have a post with this id, set a flag for us to know to update the post
    //     // when we hit submit
    //     updating = true;
    //   }
    // });
  }
  function ajaxGet(beerCategory) {
    console.log("there beer goes into ajaxGet(): " + beerCategory);
    $.ajax({
      type: "GET",
      url: "/api/beers/" + beerCategory,
      success: function(result) {
        $("#getResultDiv ul").empty();
        $.each(result, function(i, beers) {
          $("#getResultDiv .list-group").append(
            "Beer Name: " +
              beers.beername +
              " " +
              "Rating: " +
              beers.rating +
              "<br>"
          );
        });
        console.log("Success: ", result);
      },
      error: function(e) {
        $("#getResultDiv").html("<strong>Error</strong>");
        console.log("ERROR: ", e);
      }
    });
  }
};
//figure out how to post to its particular card
//if tag
// function buttonCompare(cardName, beerCategory) {
//   var newCardname = cardName + "- card-title";
//   console.log("this is the name with OUT card title: " + cardName);
//   //console.log("passed the button into buttonCompare: " + newCardname);
//   //console.log("with hyphen WILL NEED THIS " + hyphenButton); //use this for empty div
//   var cardArray = [
//     "pilsner- card-title",
//     "brown-ale- card-title",
//     "porter- card-title",
//     "wheat-beer- card-title",
//     "dark-lager- card-title",
//     "pale-ale- card-title",
//     "stout- card-title",
//     "wild-sour-ale- card-title",
//     "german-black- card-title",
//     "india-pale-ale- card-title",
//     "belgian-style-ale- card-title",
//     "specialty-beer- card-title"
//   ];
//   for (var i = 0; i < cardArray.length; i++) {
//     //this will only print underneath the card title
//     // console.log(cardArray[i]);
//     if (newCardname === cardArray[i]) {
//       console.log(newCardname + " = " + cardArray[i] + " MATCH ");
//       //var cardLast = JSON.stringify("." + cardName);
//       //var insertDiv = JSON.stringify("." + newCardname);
//       // console.log(insertDiv);
//       //console.log(typeof insertDiv);
//       //console.log("passing this to jquery: " + cardLast);
//       $("." + cardName).after("<div id = name-of-button-> HERE </div>");
//       // $("." + hyphenButton).empty();
//     }
//   }
// }
