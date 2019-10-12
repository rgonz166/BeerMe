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
      var beerImg = "";
      // postCounter++;
      // var postsAmount = 4;
      console.log(result);
      // for when we have more posts
      // i < (postsAmount * postCounter)
      for (var i = 0; i < result.length; i++) {
        switch (result[i].beerName) {
          case "Stone IPA":
            beerImg =
              "https://products0.imgix.drizly.com/ci-stone-ipa-87ab6232002e817e.png?auto=format%2Ccompress&fm=jpeg&q=20";
            break;
          case "Pacifico":
            beerImg =
              "https://products0.imgix.drizly.com/ci-pacifico-clara-c4083c054131f5c0.png?auto=format%2Ccompress&fm=jpeg&q=20";
            break;
          case "Negra Modelo":
            beerImg ="https://products3.imgix.drizly.com/ci-negra-modelo-5e9fde4dff726bf8.jpeg?auto=format%2Ccompress&fm=jpeg&q=20";
            break;
          case "Stone Smoked Porter":
            beerImg ="https://products1.imgix.drizly.com/ci-stone-smoked-porter-807620fe06a4ed26.jpeg?auto=format%2Ccompress&fm=jpeg&q=20";
            break;
          default:
            beerImg =
              "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
        }
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
            "<img src='" +
            beerImg +
            "' class='card-img-top' alt='...'>" +
            "<div class='container'>" +
            "<div class='row'>" +
            "<div class='col-mt-3 col-12'>" +
            "<button class='btn rounded-pill' data-toggle='collapse' data-target='#card-" +
            (i + 1) +
            "'>" +
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
