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

let contenitoreListaSpesa=document.getElementById("listaSpesa");
let i=0;

let arrayListaSpesa=["3x latte","Spaghetti","Acqua naturale","Cibo per cani"];

do{
    contenitoreListaSpesa.innerHTML += '<li id="elementoLista'+i+'" class="mr-2">'+arrayListaSpesa[i]+'<button type="button" class="btn btn-primary " id="RemoveSelf'+i+'">Rimuovi</button></li>';
    i++;
}while(i<arrayListaSpesa.length);


for(let j=0;j<arrayListaSpesa.length;j++){
   let removeSelf=document.getElementById("RemoveSelf"+j);
   let listaelemento=document.getElementById("elementoLista"+j);
    console.log(removeSelf);
    removeSelf.addEventListener("click", function(){
        listaelemento.remove();
    });

}

/*let lista=document.getElementById("AggiungeElemento");

function aggiungiElemento(){
    lista.innerHTML+='<li>3x latte<button type="button" class="btn btn-primary" onClick=rimuoviElemento()>Rimuovi</button></li>';
}*/