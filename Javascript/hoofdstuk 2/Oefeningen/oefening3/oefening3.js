let games = ["Call of Duty", "Minecraft", "GTA"];

for (let i = 0; i < games.length; i++) {
    let output = games[i] + "</br>";

    let resultaat = document.createElement("div");
    resultaat.innerHTML = output;
    document.body.appendChild(resultaat);
}