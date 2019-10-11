$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var userNameInput = $("#username");
  var emailInput = $("#e-mail");
  var passwordInput = $("#password");
  var registerForm = $("#register-form");

  // Event listener when form is submitted
  $(registerForm).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (
      !userNameInput.val().trim() ||
      !emailInput.val().trim() ||
      !passwordInput.val().trim()
    ) {
      return;
    }
    // Check if username exists
      // function checkUser(user){

      // }
    // Constructing a newPost object to hand to the database
    var newUser = {
      username: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    submitNewUser(newUser);
  }

  function submitNewUser(user) {
    $.post("/api/user", user, function() {
      window.location.href = "/";
    });
  }
});
