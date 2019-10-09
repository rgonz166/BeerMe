window.onload = function() {
  $(".btn-primary").on("click", function(event) {
    var buttonName = this.className;
    console.log(buttonName); //will show what button beer is being clicked on
    var res = buttonName.split(" "); // will split the class string name by spaces
    console.log(res[0]);
    event.preventDefault();
    getCategoyBeer(res[0]);
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
    // $.ajax({
    //   type: "GET",
    //   url: "/api/beers/" + beerCategory,
    //   success: function(result) {
    //     $("#getResultDiv ul").empty();
    //     var cusList = " ";
    //     $.each(result, function(i, beer) {
    //       $("#getResultDiv .list-group").append(
    //         beer.beername + " " + beer.reviews + " " + beer.rating + "<br>"
    //       );
    //     });
    //     console.log("Success: ", result);
    //   },
    //   error: function(e) {
    //     $("#getResultDiv").html("<strong>Error</strong>");
    //     console.log("Error: ", e);
    //   }
    // });
  }
};
