// Gideon van den Herik
// Applicatie- en mediaontwikkelaar

const Requirement = alert("U dient 3 vragen te beantwoorden! Druk op \"OK\"!");

var firstname = prompt("Wat is uw voornaam?");		//Dit slaat het antwoordt op wat de gebruiker in heeft gevuld
var lastname = prompt("Wat is uw achternaam?");		//Dit slaat het antwoordt op wat de gebruiker in heeft gevuld
var age = prompt("Wat is uw leeftijd?");			//Dit slaat het antwoordt op wat de gebruiker in heeft gevuld

document.writeln("Uw voornaam is: " + firstname + "<br>");		//Dit schrijf het antwoord uit van de gebruiker. D.M.V. de data uit de variabele te halen.
document.writeln("Uw achternaam is: " + lastname + "<br>");		//Dit schrijf het antwoord uit van de gebruiker. D.M.V. de data uit de variabele te halen.
document.writeln("Uw leeftijd is: " + age + "<br>");			//Dit schrijf het antwoord uit van de gebruiker. D.M.V. de data uit de variabele te halen.

if (firstname === "Gideon") {									//De code checkt ofdat het antwoordt gelijk staat aan "Gideon". Als dat "true" is, dan wordt de code uitgevoerd tussen de "{ }".
    alert("Coole naam!");										//Maakt een pop-up met de tekst: "Coole naam!"
}
else if (firstname === "Pieterjan") {							//Als het niet gelijk was aan "Gideon", dan wordt deze code geactiveerd. Als de naam gelijk staat aan "Pieterjan", dan wordt de code uitgevoerd tussen de "{ }".
    alert("Love you baby!")										//Maakt een pop-up met de tekst: "Love you baby!"
}
else {															//Alle namen die niet gelijk waren aan de vorige if/else if's die voeren deze code uit.
    alert("Niet zo'n coole naam!");								//Maakt een pop-up met de tekst: "Niet zo'n cool naam!"
}