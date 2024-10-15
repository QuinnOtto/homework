let datum = new Date();
let minuut = datum.getMinutes();

let kwartier;

if (minuut >= 0 && minuut < 15) {
  kwartier = "Kwartier 1 (0-15)";
} else if (minuut >= 15 && minuut < 30) {
  kwartier = "Kwartier 2 (15-30)";
} else if (minuut >= 30 && minuut < 45) {
  kwartier = "Kwartier 3 (30-45)";
} else if (minuut >= 45 && minuut < 60) {
  kwartier = "Kwartier 4 (45-60)";
}

console.log(`Het is nu: ${minuut} minuten`);
console.log(`Dit valt in: ${kwartier}`);
// print de minuten en het kwartier waarin de minuten vallen in de console
// we gebruiken hier een if else statement om te kijken in welk kwartier de minuten vallen