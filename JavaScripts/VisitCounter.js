  $.getJSON("https://api.countapi.xyz/hit/akahusky24.github.io/visits", function(response) {
    $("#visits").text(response.value);
});