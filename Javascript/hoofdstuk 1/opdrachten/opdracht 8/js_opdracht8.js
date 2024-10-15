let leeftijd = window.prompt("Hallo, hoe oud bent u?")


if (leeftijd >= 0 && leeftijd <= 1 ) {
    leeftijd_groep = ("Je bent een baby ");
} else if (leeftijd >= 1 && leeftijd <= 3) {
    leeftijd_groep = ("Je bent een peuter")
} else if (leeftijd >= 3 && leeftijd <= 6) {
    leeftijd_groep = ("Je bent een kleuter")
} else if(leeftijd >= 6 && leeftijd <= 12) {
    leeftijd_groep = ("Je bent een kind")
} else if (leeftijd >= 12 && leeftijd <= 16) {
    leeftijd_groep = ("Je bent een puber")
} else if (leeftijd >= 16 && leeftijd <= 21) {
    leeftijd_groep = ("Je bent een adolocent")
} else if (leeftijd >= 21 && leeftijd <= 110 ) {
    leeftijd_groep = ("Je bent volwassen")
} else if (leeftijd >= 110 ) {
    leeftijd_groep = ("Verkeerde invoer")
} else if (leeftijd <= -1) {
    leeftijd_groep = ("Verkeerde invoer")
}

let leeftijden = document.createElement("p")
leeftijden.innerHTML = `je bent ${leeftijd} jaar oud en ${leeftijd_groep}`;
document.body.appendChild(leeftijden);

// we vragen de leeftijd van de gebruiker in een window prompt en kijken met if en if else statements in welke leeftijdsgroep de gebruiker valt
// we maken een p element aan en voegen deze toe aan de body
