$(document).ready(function() {
  var availableTags = [];

  $.ajax({
    type: "GET",
    url: "/api/beers/",
    success: function(result) {
      $.each(result, function(i, beers) {
        availableTags.push(beers.beername);
      }); //$.each
      $("#beer-name").autocomplete({
        source: availableTags
      });
    }
  }); //ajax
});
