var array = $("#imagebox").children().toArray();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//Randomize order
function randomOrder() {
    window.location.href = window.location.href + "?random=true";
}

//Make site know, to change to default order
function newestOrder() {
    //Add ?default=true after site if it isn't there yet
  if (!urlParams.get("default")) {
    history.replaceState(null, "", location.href.split("?")[0]);
    window.location.href = window.location.href + "?default=true";
  }
}


//Make site know, to change to oldest order
function oldestOrder() {
  //Add ?oldest=true after site if it isn't there yet
  if (!urlParams.get("oldest")) {
    window.location.href = window.location.href + "?oldest=true";
  }
}

//Change to defaukt order
if (urlParams.get("random")) {
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

  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
}

//Change to defaukt order
if (urlParams.get("default")) {
  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
}

//Change to last order
if (urlParams.get("oldest")) {
  var i = array;
  i.reverse();

  $("#imagebox").append(i);

  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
}
