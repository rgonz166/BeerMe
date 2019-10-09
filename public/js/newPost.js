$(document).ready(function() {
  // Check Radio-box
  $(".rating input:radio").attr("checked", false);

  $(".rating input").click(function() {
    $(".rating span").removeClass("checked");
    $(this)
      .parent()
      .addClass("checked");
  });

  // Getting jQuery references to the post body, title, form, and author select
  //   var userId = $("#user-id");
  var beerNameInput = $("#beer-name");
  var reviewInput = $("#review");
  var ratingSelect;
  var categorySelect = $("#category");
  var registerForm = $("#new-post-form");

  $("input:radio").change(function() {
    ratingSelect = this.value;
  });

  // Event listener when form is submitted
  $(registerForm).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (
      !beerNameInput.val().trim() ||
      !reviewInput.val().trim() ||
      ratingSelect === undefined ||
      categorySelect.val() === "select-one"
    ) {
      // console.log();
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      userId: 4,
      category: categorySelect.find(":selected").text(),
      beerName: beerNameInput.val().trim(),
      review: reviewInput.val().trim(),
      rating: ratingSelect
    };

    submitNewPost(newPost);
  }

  function submitNewPost(post) {
    $.post("/api/post", post, function() {
      window.location.href = "/posts";
    });
  }
});
