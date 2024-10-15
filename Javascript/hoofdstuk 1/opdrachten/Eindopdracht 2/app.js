function begroting_verdelen() {
    // Initialiseer de totale begroting
    var begroting = 330000000000;

    // Haal de waarden van de inputvelden op en converteer ze naar getallen
    var ministerieAlgemeneZaken = parseFloat(document.getElementById("ministerie-algemene-zaken").value) || 0;
    var ministerieAsielMigratie = parseFloat(document.getElementById("ministerie-asiel-migratie").value) || 0;
    var ministerieBinnenlandseZaken = parseFloat(document.getElementById("ministerie-binnenlandse-zaken").value) || 0;
    var ministerieBuitenlandseZaken = parseFloat(document.getElementById("ministerie-buitenlandse-zaken").value) || 0;
    var ministerieDefensie = parseFloat(document.getElementById("ministerie-defensie").value) || 0;
    var ministerieEconomischeZaken = parseFloat(document.getElementById("ministerie-economische-zaken").value) || 0;
    var ministerieFinancien = parseFloat(document.getElementById("ministerie-financien").value) || 0;
    var ministerieInfrastructuurWaterstaat = parseFloat(document.getElementById("ministerie-infrastructuur-waterstaat").value) || 0;
    var ministerieKlimaatGroeneGroei = parseFloat(document.getElementById("ministerie-klimaat-groene-groei").value) || 0;
    var ministerieLandbouwVisserijVoedselzekerheidNatuur = parseFloat(document.getElementById("ministerie-landbouw-visserij-voedselzekerheid-natuur").value) || 0;
    var ministerieOnderwijsCultuurWetenschap = parseFloat(document.getElementById("ministerie-onderwijs-cultuur-wetenschap").value) || 0;
    var ministerieSocialeZaken = parseFloat(document.getElementById("ministerie-sociale-zaken").value) || 0;
    var ministerieJustitieVeiligheid = parseFloat(document.getElementById("ministerie-justitie-veiligheid").value) || 0;
    var ministerieVolkshuisvesting = parseFloat(document.getElementById("ministerie-volkshuisvesting").value) || 0;
    var ministerieVolksgezondheid = parseFloat(document.getElementById("ministerie-volksgezondheid").value) || 0;

    // Maak een array van alle ministeries
    var ministeries = [
        ministerieAlgemeneZaken,
        ministerieAsielMigratie,
        ministerieBinnenlandseZaken,
        ministerieBuitenlandseZaken,
        ministerieDefensie,
        ministerieEconomischeZaken,
        ministerieFinancien,
        ministerieInfrastructuurWaterstaat,
        ministerieKlimaatGroeneGroei,
        ministerieLandbouwVisserijVoedselzekerheidNatuur,
        ministerieOnderwijsCultuurWetenschap,
        ministerieSocialeZaken,
        ministerieJustitieVeiligheid,
        ministerieVolkshuisvesting,
        ministerieVolksgezondheid
    ];

    // Controleer of alle velden zijn ingevuld
    var leegVeld = ministeries.every(function(ministerie) {
        return ministerie > 0;
    });

    if (!leegVeld) {
        // Toon een foutmelding als niet alle velden zijn ingevuld
        document.getElementById("invullen").innerText = "Je moet wel alle velden correct invullen!";
    } else {
        // Verwijder de foutmelding
        document.getElementById("invullen").innerText = "";

        // Bereken de totale begroting
        let total_begroting = ministeries.reduce((acc, ministerie) => acc + ministerie, 0);

        console.log("Total allocated budget: " + total_begroting);

        if (total_begroting > begroting) {
            // Toon een foutmelding als de totale begroting het beschikbare bedrag overschrijdt
            document.getElementById("result").innerText = "De totale begroting overschrijdt het beschikbare bedrag!";
        } else {
            // Toon de totale begroting
            document.getElementById("result").innerText = "De totale begroting is: " + total_begroting + " / " + begroting;
        }
    }
}
