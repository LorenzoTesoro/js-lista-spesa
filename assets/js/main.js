/* Consegna: stampare a schermo lista della spesa con ciclo while */


// 1. Creo un array in cui inserisco le singole istruzioni

const list = [
    'Comprare il pane',
    'Comprare il latte',
    'Comprare la verdure',
    'Comprare gli snacks',
    'Comprare il vino'
]

// 2. Scorrere dentro l'array - ciclo while

const ulElement = document.querySelector('ul');
let i = 0;

while(i < list.length){
    const item = list[i];
    ulElement.innerHTML += `<li>${item}</li>`; 
    //console.log(item);
    i++;
}