window.addEventListener("scroll", function() {
    let footer = document.querySelector("footer");
    let scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;

    
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});