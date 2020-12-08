"use strict";

(() => {
const query = new URLSearchParams(window.location.search).get("q");

if (query === null)
  return;

for (const element of document.querySelectorAll(`body .image:not(.${query})`)) {
  element.remove();
}
})();

if (urlParams.has("q")) {
    document.getElementById("paragraph").innerHTML =
      "Showing search results for: " + query;
}