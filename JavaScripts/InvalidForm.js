document.getElementById("submitButton").addEventListener("click", function () {
  document.getElementById("form").className = "submitted";
});
document.querySelector( "input" ).addEventListener( "invalid",
 function( event ) {
        event.preventDefault();
  });