window.onload = function() {

    const canvas = document.createElement("canvas"); 
    const ctx = canvas.getContext("2d");

    canvas.setAttribute('width', 4000);
    canvas.setAttribute('height', 4000);
    document.body.appendChild(canvas);

    let x = 100;  
    let y = 200;  
    let r = 10;  

    for (let i = 0; i < 10; i++) {
        ctx.fillStyle = "black";  
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);  
        ctx.fill();  

        x += 250;
        r += 10;
    }
}
