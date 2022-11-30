

let form = document.querySelector(".password-form");
console.log(form);
let lengthTemp = document.getElementById("length");
console.log(lengthTemp);


let displayPassword = document.getElementById("displayPassword");
console.log(displayPassword);






const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '(', ')', '*', '+'];

console.log(characters);



const charactersWithSymbolsOnly = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "$", "%", "(", ")", "*", "+", "#"];
console.log(charactersWithSymbolsOnly);

const charactersWithNumbersOnly = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(charactersWithNumbersOnly);

let symbols = document.getElementById("symbols");
console.log(symbols);

let numbers = document.getElementById("numbers");
console.log(numbers);

function containsUndefined(arr) {
    return arr.includes(undefined);
}


function getRandomNumber(target) {
    var num1 = Math.random();
    var num2 = (num1 * target) + 1;
    var num3 = Math.floor(num2);
    return num3;
}


function generatePassword(number) {
    //symbols only checked
    

    if (symbols.checked === true && numbers.checked === false) {
        let symbolsTemp = "";
        for (let i = 0; i < number; i++) {
            symbolsTemp += charactersWithSymbolsOnly[getRandomNumber(59)];
        }
        console.log(symbolsTemp);
        displayPassword.innerHTML = symbolsTemp;
    }
    //numbers only checked
    else if (symbols.checked === false && numbers.checked === true) {
        let numbersTemp = "";
        for (let i = 0; i < number; i++) {
            numbersTemp += charactersWithNumbersOnly[getRandomNumber(61)];
        }
        console.log(numbersTemp);
        displayPassword.innerHTML = numbersTemp;
    }
    else if (symbols.checked === true && numbers.checked === true) {
        let comboTemp = "";
        for (let i = 0; i < number; i++) {
            comboTemp += characters[getRandomNumber(70)];
        }
        console.log(comboTemp);
        displayPassword.innerHTML = comboTemp;
    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello");

    let num = parseInt(lengthTemp.value);
    console.log(num);
    if (isNaN(num)) {
        alert("Please input a number (in Set Password Length field) ");
    }
    else {
        generatePassword(num);
    }

    











});



