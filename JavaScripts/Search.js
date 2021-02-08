"use strict";

(() => {
  //Get q=searcheditem from query
  const query = new URLSearchParams(window.location.search).get("q");

  //If there isnt search parameter do nothing
  if (query === null) return;

  //Select elements that don't have search parameters
  for (const element of document.querySelectorAll(`div.imagebox a:not(.${query})`)) {
    //Remove selected elements
    element.remove();
  }

  //Randomize Photos
  var array = $("#imagebox").children().toArray();
  var i = array.length,
    j,
    temp;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  $("#imagebox").append(array);
})();


var query2 = new URLSearchParams(window.location.search);

if (query2.has("q")) {
  document.getElementById("paragraph").innerHTML = "Showing search results for: " + query2.get("q");

  //Remove parameters from query
  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
}
