document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('appel').innerHTML = "Ik ben een appel";

 
    let img = document.createElement('img');
    img.src = "pietertje.jpg";  
    document.body.appendChild(img); 
    
    console.log("Dit is een hele geheimen boodschap!")
    console.log("wat er op deze pagina staat is niet waar en klopt niet")
    console.log("Dit plaatje klopt niet helemaal omdat dit niet bij de pagina past")
    console.log("Mijn naam is Quinn")
    console.log("en ik ben 16 jaar oud")
    // print iets in de console met gebruik van een extern javascript bestand
    // we maken hier ook een img element aan en voegen deze toe aan de body
});
