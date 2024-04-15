const numbers = [12, 25, 47, 8, 2, 10, 3, 14, 20, 5];

function tri(numbers, order){
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    } else {
        console.log("Error: order must be either 'asc' or 'desc'");
    }
};

tri(numbers, "asc");
console.log(numbers);

tri(numbers, "desc");   
console.log(numbers);