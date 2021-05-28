// Question 1
function convertFahrToCelsius(fahr) {

    var celsius = ((fahr - 32) * 5 / 9);

    if (Array.isArray(fahr)) {

        return (`${JSON.stringify(fahr)} is not a valid number but a/an array`);

    } else if (isNaN(fahr) || typeof(fahr) === "boolean") {

        return (`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof (fahr)}`);

    } else {

        return celsius.toFixed(4);
    }
}
    
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius(true));
console.log(convertFahrToCelsius(false));
console.log(convertFahrToCelsius("Javascript"));
console.log(convertFahrToCelsius({temp: 0}));
    

// Question 2

function checkYuGiOh(n) {
    let newArray = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            newArray.push("yu-gi-oh")
        } else if (i % 3 === 0 && i % 5 === 0) {
            newArray.push("gi-oh")
        } else if (i % 2 === 0 && i % 5 === 0) {
            newArray.push("yu-oh")
        } else if (i % 2 === 0 && i % 3 === 0) {
            newArray.push("yu-gi")
        } else if (i % 5 === 0) {
            newArray.push("oh")
        } else if (i % 3 === 0) {
            newArray.push("gi")
        } else if (i % 2 === 0) {
            newArray.push("yu")
        } else {
            newArray.push(i)
        }
    }
    
    if (isNaN(n)) {
        return (`invalid parameter: "${n}"`)
    }
    return newArray
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh(30));
console.log(checkYuGiOh("fizzbuzz is meh"));