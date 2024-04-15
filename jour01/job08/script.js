function sommeNombresPremiers(nombre1, nombre2) {
    let somme = 0;
    for (let i = nombre1; i <= nombre2; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            somme += i;
        }
    }
    return somme;
}

console.log(sommeNombresPremiers(1, 10)); 
console.log(sommeNombresPremiers(5, 7)); 
console.log(sommeNombresPremiers(10, 9));
