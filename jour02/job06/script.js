
let konamiCode = ['ArrowUp','ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            applyKonamiStyle();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function applyKonamiStyle() {
    document.body.style.backgroundColor = "#0062ff";
}


window.addEventListener("scroll", function() {
    let footer = document.querySelector("footer");
    let scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;

    
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});