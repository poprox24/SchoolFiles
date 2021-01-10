var array = $("#flexbox").children().toArray();
var i = array.length,
    j, temp;
while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

$("#flexbox").append(array);