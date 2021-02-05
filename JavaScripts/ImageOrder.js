var array = $("#flexbox").children().toArray();

function randomOrder() {
  var i = array.length,
    j,
    temp;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  $("#flexbox").append(array);

  var url= document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
}

function newestOrder() {
  window.location = window.location.pathname;
  return false;
}

function oldestOrder() {
    window.location.href = window.location.href + "?oldest=true";
}
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString)
  if (urlParams.get('oldest')) {
    
  }