document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");
    let compteur = document.getElementById("compteur");

    function addOne() {
        let count = parseInt(compteur.innerText, 10);
        compteur.innerText = count + 1;
    }

    button.addEventListener("click", addOne);
});