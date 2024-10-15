function prijs_berekenen() {
    let artikelen = document.getElementById("prijs_artikelen").value;
    let aantal = document.getElementById("aantal_atrikelen").value;

    let prijs = parseFloat(artikelen);
    let aantalArtikelen = parseInt(aantal);

    if (isNaN(prijs) || isNaN(aantalArtikelen)) {
        document.getElementById("totaal2").innerHTML = "Vul geldige nummers in!";
    } else if(prijs <= 0 ){
        document.getElementById("totaal2").innerHTML = "Vul geldige nummers in!";
    } else {
        let totaal = prijs * aantalArtikelen;

        document.getElementById("totaal2").innerHTML = "Totale prijs: €" + totaal.toFixed(2) + ";";
    }
}
// we maken een functie aan die de prijs van een artikel berekent
// we halen de prijs en het aantal artikelen op en berekenen de totale prijs door de prijs * elkaar tedoen met het aantal artikelen