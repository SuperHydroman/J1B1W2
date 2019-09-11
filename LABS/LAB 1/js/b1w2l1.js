// begin hier je JavaScript commandos

alert("U dient 3 vragen te beantwoorden! Druk op \"OK\"!");

var firstname = prompt("Wat is uw voornaam?");
var lastname = prompt("Wat is uw achternaam?");
var age = prompt("Wat is uw leeftijd?");

document.writeln("Uw voornaam is: " + firstname + "<br>");
document.writeln("Uw achternaam is: " + lastname + "<br>");
document.writeln("Uw leeftijd is: " + age + "<br>");

if (firstname === "Gideon") {
    alert("Coole naam!");
}
else if (firstname === "Pieterjan") {
    alert("Love you baby!")
}
else {
    alert("Niet zo'n coole naam!");
}