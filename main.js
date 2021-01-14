

const firstInput = document.querySelector('.firstInput');
const secondInput = document.querySelector('.secondInput');
const firstButton = document.querySelector('.firstButton');
const firstAnswer = document.querySelector('.firstAnswer');

// zadanie 1
// Napisz skrypt który dla podanych przez użytkownika liczb oddzielonych przecinkami wyliczy i wyświetli ich średnią arytmetyczną.
// Wartości nieliczbowe powinny zostać pominięte w obliczeniach.

// const average = () => {
//     let numbers = firstInput.value.split(",");
//     let sum = 0;
//     numbers.forEach((item, index) => {
//         if(isNaN(item)){
//         numbers.splice(index,1);
//         }});
//     numbers.forEach(item => sum += parseInt(item));
//     firstAnswer.textContent = sum/numbers.length;
// }
// firstButton.addEventListener('click', average);

// Zadanie 2
// Napisz skrypt który dla podanego przez użytkownika roku zwróci informację czy jest on przestępny.

// const year = () => {
//     if(isNaN(firstInput.value)) return firstAnswer.textContent = "podaj liczbę";
//     if(firstInput.value % 4 === 0) firstAnswer.textContent = "rok przestępny";
//     else firstAnswer.textContent = "rok nieprzestępny";  
// }
// firstButton.addEventListener('click', year);

// Zadanie 3
// Napisz skrypt który przekształca temperaturę podaną w stopniach Celsjusza na temperaturę w stopniach Fahrenheita.

// const fahrenheit = () => {
//     if(isNaN(firstInput.value)) return firstAnswer.textContent = "podaj liczbę";
//     else firstAnswer.textContent = (firstInput.value*9/5)+32 + " stopni(e) Fahrenheita";  
// }
// firstButton.addEventListener('click', fahrenheit);

// Zadanie 4
// Napisz skrypt, który sprawdzi czy dwa podane ciągi znaków są anagramami*.



// Zadanie 5
// Napisz skrypt, który sprawdzi czy podany ciąg znaków jest palindromem*.

// const palindrome = () => {
//     const firstValue = firstInput.value.split(""),
//     secondValue = secondInput.value.split("");
//     let firstWord, secondWord;
//     firstValue.reverse();
//     firstValue.forEach(item => firstWord += item);
//     secondValue.forEach(item => secondWord += item);
//     firstAnswer.textContent = `to ${firstWord === secondWord ? '' : 'nie'} są palindromy`;
// }
// firstButton.addEventListener('click', palindrome);

// Zadanie 6


// Zadanie 7


// Zadanie 8


