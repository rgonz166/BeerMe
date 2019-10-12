// get values from form
$(document).ready(function() {
  // check if signed in
  if (Cookies.get("username") === undefined) {
    // do nothing
    return;
  } else {
    $("#login-text").text(Cookies.get("username"));
  }
  // variables
  var usernameInput = $("#username");
  var passwordInput = $("#password");
  var loginForm = $("#login-form");

  $(loginForm).on("submit", checkLogin);

  function checkLogin(event) {
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/api/users/" + usernameInput.val().trim(),
      success: function(result) {
        if (result.length === null) {
          // no username
          alert("Username or password not correct");
        } else if (passwordInput.val().trim() === result.password) {
          Cookies.set("username", usernameInput.val().trim());
          window.location.href = "/";
        } else {
          alert("Username or password not correct");
        }
      }
    });
  }
});
