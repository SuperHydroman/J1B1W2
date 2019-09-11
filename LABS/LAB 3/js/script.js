var getal1 = 6;
var getal2 = 3;
var aantal = 10;

for (var i = 1; i <= aantal; i++) {
	var createDiv = document.createElement("DIV");
	createDiv.innerHTML = "<div>" + i + " x " + getal1 + " = " + i * getal1 + "<br>" + "</div>"
	document.getElementById("container").appendChild(createDiv);
}

var createH3 = document.createElement("H3");
createH3.innerHTML = "Tafel van 3";
document.getElementById("container").appendChild(createH3);

for (var i = 1; i <= aantal; i++) {
	var createDiv2 = document.createElement("DIV");
	createDiv2.innerHTML = "<div>" + i + " x " + getal2 + " = " + i * getal2 + "<br>" + "</div>"
	document.getElementById("container").appendChild(createDiv2);
}
document.write("<br>");
// document.write(12 + getal1);

var sGetal = 12;

document.write("<p>" + sGetal + " + 6 = " + (sGetal = sGetal + 6), + ", " + sGetal + " x 10 = " + (sGetal = sGetal * 10) + ", " + sGetal + " : 5 = " + (sGetal = sGetal / 5) + ", " + sGetal + " - 12 = " + (sGetal = sGetal - 12) + "</p>");