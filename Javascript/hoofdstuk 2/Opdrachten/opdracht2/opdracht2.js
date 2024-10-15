function gefeliciteerd() {
    let leeftijd = document.getElementById("leeftijd").value;
    let output = "";

    for (let i = 1; i <= leeftijd; i++) {
        output += "Ik feliciteer je " + i + " keer. <br>";
    }

    document.getElementById("resultaat").innerHTML = output;
}
