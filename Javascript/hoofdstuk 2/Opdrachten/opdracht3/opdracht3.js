function gefeliciteerd() {
    let leeftijd = document.getElementById("leeftijd").value;
    let output = "";

    let i = 0;
    while (i < leeftijd) {
        i++;
        output += "Ik feliciteer je " + y + " keer. <br>";
    }
    
    return document.getElementById("resultaat").innerHTML = output;
}
