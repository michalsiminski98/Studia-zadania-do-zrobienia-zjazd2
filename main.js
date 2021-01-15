

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

// const anagram = () => {
//     let firstValue = firstInput.value.split(""),
//     secondValue = secondInput.value.split(""),
//     flag = true;
    
//     firstValue.forEach(item => {
//         if(secondValue.includes(item)){
//          secondValue.splice(secondValue.indexOf(item),1);
//         }
//         else {
//             flag = false;
//         }
//     });
//     if(secondValue.length) {
//         flag = false;
//     }
//     firstAnswer.textContent = `to ${flag ? '' : 'nie'} są anagramy`;
// }
// firstButton.addEventListener('click', anagram);

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
// Napisz skrypt, który wyświetli na konsli następujący "magiczny" trójkąt:
// ```
//  A B R A K A D A B R A
//   A B R A K A D A B R
//    A B R A K A D A B
//     A B R A K A D A
//      A B R A K A D
//       A B R A K A
//        A B R A K
//         A B R A
//          A B R
//           A B
//            A
// ```

// const abrakadabra = () => {
//     let abrakadabraWord ='A B R A K A D A B R A';
//     let txt = abrakadabraWord;
//     let space = i => {
//         let long = '';
//         while(i != 0){
//             long += ' ';
//             i = i-2;
//         }
//         return long;
//     }
//     for(let i = 0; abrakadabraWord.length > i; i = i+2){
//     txt = space(i) + abrakadabraWord.substr(0, abrakadabraWord.length-i);
//     console.log(txt);
//     }
// }
// firstButton.addEventListener('click', abrakadabra);

// Zadanie 7
// Napisz skrypt dla wprowadzonej liczby całkowitej `n` wyświetli gwiazdkami w konsoli prostokąt złożony z `n` wierszy oraz `2n` kolumn.
// Przykład:
// Dla n = 5:
// ```
// **********
// **********
// **********
// **********
// **********
// ```

// const rectangle = () => {
//     const value = firstInput.value;
//     let number ='';
//     if(isNaN(value)) return console.log('Podaj liczbę');
//     else{
//         for(let i = 0; value * 2 > i; i++){
//         number += '*';
//         }
//         for(let i = 0; value > i; i++){
//             console.log(number);
//         }
//     }
// }
// firstButton.addEventListener('click', rectangle);

// Zadanie 8
// Napisz skrypt, który dla podanej liczby całkowitej `n` wyświetli gwiazdkami w konsoli trójkąt równoboczny złożony z `n` wierszy (w pierwszym wierszu jedna gwiadka a kolejne wiersze coraz szersze).
// Przykład:
// Dla n = 6:
// ```
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ```

// const triangle = () => {
//     const value = firstInput.value;
//     let stars = '*';
//     if(isNaN(value)) return console.log('Podaj liczbę');
//     let spaces = i => {
//         let repeat = value;
//         let long= '';
//         while(i < repeat){
//             long += ' ';
//             i++;
//         }
//         return long;
//     }
//     for(let i = 0; i < value; i++){
//         console.log(spaces(i) + stars);
//         stars += '**';
//     }
// }
// firstButton.addEventListener('click', triangle);