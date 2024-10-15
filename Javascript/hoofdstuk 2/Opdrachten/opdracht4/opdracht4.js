    const colors = [];
    let getal = 10;


    for (let i = 0; i < getal; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
    }


    for (let i = 1; i <= getal; i++) {
        let output = "dit is div " + i + " " + colors[i - 1] + "</br>" ;

        let resultaat = document.createElement("div");
        resultaat.innerHTML = output;
        resultaat.style.backgroundColor = colors[i - 1];
        document.body.appendChild(resultaat);
    }