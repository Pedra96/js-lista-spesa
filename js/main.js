/*Consegna:
Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Bonus:
Aggiungere alla pagina un campo di input testuale e un pulsante “aggiungi”: l’utente inserisce nell’input un prodotto da acquistare e quando clicca sul pulsante, il testo viene aggiunto alla lista.
Super Bonus:
Aggiungere a fianco ad ogni elemento della lista un pulsante “elimina”: quando l’utente clicca su uno di questi pulsanti, l’elemento corrispondente viene rimosso dalla lista*/
/*-------------------------------------------------------------
 esempio di while loop
let i=0;
while(i<arrayListaSpesa.length){
    console.log(arrayListaSpesa[i]);
    i++;
}
*/

/* esempio di do... while loop
let i=0;
do{
    console.log(arrayListaSpesa[i]);
    i++;
}while(i<arrayListaSpesa.length);
----------------------------------------------------------------*/

let contenitoreListaSpesa = document.getElementById("listaSpesa");
let arrayListaSpesa = ["3x latte", "Spaghetti", "Acqua naturale", "Cibo per cani"];
let elementoUtente = document.getElementById("elementoUtente");
let aggiungiElemento = document.getElementById("AggiungeElemento");

loadListaSpesa();

//funzione per caricare l'array su html.

function loadListaSpesa() {
    let i = 0;
    do {
        addListaSpesa(i, arrayListaSpesa[i]);
        i++;
    } while (i < arrayListaSpesa.length)
}


aggiungiElemento.addEventListener("click", function () {
    arrayListaSpesa.push(elementoUtente.value);
    console.log(arrayListaSpesa);
    addListaSpesa(contenitoreListaSpesa.childElementCount, elementoUtente.value);
})

//funzione per aggiungere su html un nuovo elemento.

function addListaSpesa(index, value) {
    let listaChild = document.createElement("li")
    listaChild.id = "elementoLista" + index;
    listaChild.className = "mr-2";
    contenitoreListaSpesa.appendChild(listaChild);
    listaChild.innerHTML = value;

    let bottoneChild = document.createElement("button");
    bottoneChild.id = "RemoveSelf-" + index;
    bottoneChild.className = "btn btn-primary";
    listaChild.appendChild(bottoneChild);
    bottoneChild.innerHTML = "Remove";
    bottoneChild.addEventListener("click", removeElement);

}

//funzione per rimuovere l'elemento e aggiornare l'array.

function removeElement(Elemento) {
    console.log(Elemento.currentTarget.parentNode.innerText);
    let valore = Elemento.currentTarget.parentNode.innerText.replace("Remove", '');
    arrayListaSpesa.splice(arrayListaSpesa.indexOf(valore), 1);
    Elemento.currentTarget.parentNode.remove();
    console.log(arrayListaSpesa);
}