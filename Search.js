"use strict";
const query = new URLSearchParams(window.location.search);
(() => {
  const query = new URLSearchParams(window.location.search).get("q");

  if (query === null) return;

  for (const element of document.querySelectorAll(
    `div.flexbox a:not(.${query})`
  )) {
    element.remove();
  }
})();
if (query.has("q")) {
  document.getElementById("paragraph").innerHTML =
    "Showing search results for: " + query.get("q");
}