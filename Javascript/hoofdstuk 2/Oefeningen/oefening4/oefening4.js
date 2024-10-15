kleuren = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "white"]

x = 0

function checkkleuren() {
    kleuren_div.style.backgroundColor = kleuren[x]

    x = x + 1

    if (x == kleuren.length) {
        x = 0
    }
}
