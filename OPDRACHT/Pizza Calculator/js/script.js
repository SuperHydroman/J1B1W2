/*
        Gideon van den Herik
        Pizza Calculator
                                */

// Stelt de vragen aan de klant.
var smallAmount = parseInt(prompt("Hoeveel kleine pizzas wilt u? (15cm)"));
var mediumAmount = parseInt(prompt("Hoeveel medium pizzas wilt u?(20cm)"));
var largeAmount = parseInt(prompt("Hoeveel large pizzas wilt u? (30cm)"));

// De prijzen van de pizza grotes
var smPizzaPrice = 6.99;
var mePizzaPrice = 9.99;
var laPizzaPrice = 14.99;

// Berekent de totaal prijs per pizza grote
var smPizzaTotalPrice = smallAmount * smPizzaPrice;
var mePizzaTotalPrice = mediumAmount * mePizzaPrice;
var laPizzaTotalPrice = largeAmount * laPizzaPrice;

// Als het veld leeg is veranderd hij de value naar 0
if (isNaN(smallAmount)) smallAmount = 0;
if (isNaN(mediumAmount)) mediumAmount = 0;
if (isNaN(largeAmount)) largeAmount = 0;

writeLine("<div>Aantal kleine pizza's: " + smallAmount + "</div>");
writeLine("<div>Prijs per stuk: " + "&euro;" + smPizzaPrice + "</div>");
writeLine("<div>Totaal prijs: " + "&euro;" + (smPizzaTotalPrice).toFixed(2) + "</div>");
writeLine("<br>");

writeLine("<div>Aantal medium pizza's: " + smallAmount + "</div>");
writeLine("<div>Prijs per stuk: " + "&euro;" + mePizzaPrice + "</div>");
writeLine("<div>Totaal prijs: " + "&euro;" + (mePizzaTotalPrice).toFixed(2) + "</div>");
writeLine("<br>");

writeLine("<div>Aantal large pizza's: " + smallAmount + "</div>");
writeLine("<div>Prijs per stuk: " + "&euro;" + laPizzaPrice + "</div>");
writeLine("<div>Totaal prijs: " + "&euro;" + (laPizzaTotalPrice).toFixed(2) + "</div>");
writeLine("<br>");

writeLine("Totaal eindbedrag: " + "&euro;" + (smPizzaTotalPrice + mePizzaTotalPrice + laPizzaTotalPrice).toFixed(2));

//Print een regel uit op de website en zorgt ervoor dat het automatisch naar de volgende regel gaat.
function writeLine(input) {
    document.write(input);
    document.write("<br />");
}