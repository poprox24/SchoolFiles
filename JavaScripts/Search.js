"use strict";

(() => {
  const query = new URLSearchParams(window.location.search).get("q");

  if (query === null) return;

  for (const element of document.querySelectorAll(
    `div.flexbox a:not(.${query})`
  )) {
    element.remove();
  }
})();
var query2 = new URLSearchParams(window.location.search);
if (query2.has("q")) {
  document.getElementById("paragraph").innerHTML =
    "Showing search results for: " + query2.get("q");
    var url = document.location.href;
    window.history.pushState({}, "", url.split("?")[0]);
}
