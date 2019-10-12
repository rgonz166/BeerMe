// get values from form
$(document).ready(function () {
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
      success: function (result) {
        if (result.length === null) {
          // no username
          alert("Username or password not correct");
        } else if(passwordInput.val().trim() === result.password){
          alert("Logged in");
        } else{
          alert("Username or password not correct");
        }
      }
    });
  }
});
// check if that username and password matches the ones in our database


// function checkLogin(username,password){

// }
// if true, save username as cookie

/* make a script that navbar has login, or if logged (cookie has value) then login changes to username */
