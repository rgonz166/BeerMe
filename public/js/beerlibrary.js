window.onload = function() {
  $(".btn-primary").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    console.log("here");
  });
};
