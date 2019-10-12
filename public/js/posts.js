var btnScrollToTop = document.querySelector("#scrollUp");
btnScrollToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

$(document).ready(function() {
  // var postCounter = 0;
  // Get variables
  var postsArea = $("#posts-area");

  // load posts
  $.ajax({
    type: "GET",
    url: "/api/posts",
    success: function(result) {
      $(postsArea).empty();
      // postCounter++;
      // var postsAmount = 4;
      console.log(result);
      // for when we have more posts
      // i < (postsAmount * postCounter)
      for (var i = 0; i < result.length; i++) {
        postsArea.append(
          "<div class='col-lg-3 col-md-4 col-sm-6'>" +
            "<div class='card border-dark'>" +
            "<div class='card-header'>" +
            result[i].username +
            "</div>" +
            "<div class='card-body'>" +
            "<div class='card-title'>" +
            result[i].beerName +
            "</div>" +
            "<div class='container'>" +
            "<div class='row'>" +
            "<div class='col-mt-3 col-12'>" +
            "<button class='btn rounded-pill' data-toggle='collapse' data-target='#card-"+(i+1)+"'>" +
            "<div class='center-con'><div class='round'><span></span><span></span><span></span><span></span></div></div></button>" +
            "<div class='collapse' id='card-" +
            (i + 1) +
            "'>" +
            "<div class='infoText'>" +
            "<p>" +
            result[i].review +
            "</p>" +
            "</div></div></div></div></div></div>" +
            "<div class='card-footer'><small class='text-muted'>Last updated 3 mins ago</small>" +
            "</div ></div ></div >" +
            "</div></div>"
        );
      }
    },
    error: function(e) {
      postsArea.html("<strong>No Posts<strong>");
      console.log("Error: ", e);
    }
  });
});
