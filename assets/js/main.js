/* Consegna: stampare a schermo lista della spesa con ciclo while */


// 1. Creo un array in cui inserisco le singole istruzioni

const list = ['Comprare il pane', 'Comprare il latte', 'Comprare la verdura','Comprare gli snacks','Comprare il vino']

// 2. Stampare a schermo la lista della spesa:
        // 2.1 - Selezionare l'elemento della dom in cui stampare i valori
        // 2.2 - creo l'elemento da stampare
        // 2.3 - stampo i singoli valori nell'elemtento selezionato (innerhtml)

const ulElement = document.querySelector('ul');
let i = 0;

while(i < list.length){
    const item = list[i];
    ulElement.innerHTML += `<li>${item}</li>`; 
    //console.log(item);
    i++;
}