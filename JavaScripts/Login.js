var attempt = 2; // Variable to count number of attempts.
// Below function Executes on click of login button.
function login() {
  var uname = "QUh1c2t5MjQ=";
  var pword = "TVlTSVRFS3VyYXRlY2tvTVlTSVRFMTIzTVlTSVRF";
  var site = "SGlkZGVu";
  var userinput = document.getElementById("id").value;
  var passinput = document.getElementById("password").value;
  if (userinput == atob(uname) && passinput == atob(pword)) {
    alert("Login Succesful");
    window.location = atob(site); // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("id").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
