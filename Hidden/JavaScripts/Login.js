var attempt = 2; // Variable to count number of attempts.
// Below function Executes on click of login button.
function login() {
  var uname2 = "YWtybw==";
  var pword2 = "YWtybw==";
  var userinput = document.getElementById("id").value;
  var passinput = document.getElementById("password").value;

  if (userinput == atob(uname2) && passinput == atob(pword2) && q == atob("QWtybw==")) {
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