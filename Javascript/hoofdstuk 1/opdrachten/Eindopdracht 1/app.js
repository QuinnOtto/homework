    function check_ziektens() {
        try {
            // Definieer een lijst van bekende symptomen
            const symptomen = ["hoofdpijn", "rugklachten", "nekklachten", "voetklachten", "oorontsteking"];
            
            // Haal de waarden op van de invoervelden
            let naam = document.getElementById("input_naam").value;
            let leeftijd = document.getElementById("input_leeftijd").value;
            let symptomen1 = document.getElementById("input_symptomen_1").value.toLowerCase();
            let symptomen2 = document.getElementById("input_symptomen_2").value.toLowerCase();
            let symptomen3 = document.getElementById("input_symptomen_3").value.toLowerCase();
            
            // Controleer of de naam is ingevuld en geen nummer is
            if (naam.trim() === "") {
                document.getElementById("uitslag").innerHTML = "Je moet iets invullen";
                return;
            }
            if (!isNaN(naam)) {
                document.getElementById("uitslag").innerHTML = "Je moet wel tekst invullen";
                return;
            }
            
            // Maak een lijst van geselecteerde symptomen
            let selected_symptomen = [symptomen1, symptomen2, symptomen3];

            // Controleer of de geselecteerde symptomen in de lijst van bekende symptomen staan en zet ze in hoofdletters
            let matched_symptomen = selected_symptomen.map(symptoom => {
                if (symptomen.includes(symptoom)) {
                    return symptoom.toUpperCase(); 
                }
                return symptoom;
            });

            // Tel het aantal overeenkomende symptomen
            let matchCount = matched_symptomen.reduce((count, symptoom) => {
                if (symptomen.includes(symptoom.toLowerCase())) {
                    return count + 1;
                }
                return count;
            }, 0);
            
            // Geef een waarschuwing afhankelijk van de leeftijd en het aantal overeenkomende symptomen
            if (leeftijd <= 18 && matchCount >= 3) {
                window.alert("Waarschuwing!");
                return;
            } else if(leeftijd >= 18 && matchCount >= 2) {
                window.alert("Waarschuwing!!")
                return;
            }
            
            // Toon de resultaten op de pagina
            document.getElementById("uitslag").innerHTML = `Naam: ${naam}<br>Leeftijd: ${leeftijd}<br>Symptomen: ${matched_symptomen.join(", ")}`;
        } catch (error) {
            // Toon een foutmelding als er een fout optreedt
            console.error("Er is een fout opgetreden:", error);
            document.getElementById("uitslag").innerHTML = "Er is een fout opgetreden. Probeer het opnieuw.";
        }
    }