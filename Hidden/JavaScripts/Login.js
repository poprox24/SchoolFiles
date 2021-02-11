var attempt = 2; // Variable to count number of attempts.
// Below function Executes on click of login button.
function login() {
  var userinput = document.getElementById("id").value;
  var passinput = document.getElementById("password").value;

  if (userinput == atob(u1) && passinput == atob(p1) && q == atob(q1)) {
    alert("Login Succesful");
    loadPage(); // Redirecting to other page.
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");

    if (attempt == 0) {
      document.getElementById("id").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
