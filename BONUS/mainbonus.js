//DICHIARO LE VARIABILI UTILIZZATE
var livello, numMax, randomNumbers, randomPc, userNumbers, attempts, randomUserNumbers, counter;

//Utilizzo dello switch-case per chiedere il livello di difficoltà all'utente
switch (prompt('Scegli un livello di difficoltà tra: "facile", "medio" o "difficile" scrivendo un numero tra [0], [1] o [2]')) {

    case "0":
        livello = "0";
        numMax = 100;
        attempts = 84;
        
        //BREAK CHE INTERROMPE IL GIOCO LIVELLO *****FACILE*****
        break;

    case "1":
        livello = "1";
        numMax = 80;
        attempts = 64;
                
        //BREAK CHE INTERROMPE IL GIOCO LIVELLO *****MEDIO*****
        break;

    case "2":
        livello = "2";
        numMax = 50;
        attempts = 4;
        
        //BREAK CHE INTERROMPE IL GIOCO LIVELLO *****DIFFICILE*****
        break;

    default: alert("⚠️ ⚠️ ⚠️ devi scegliere una livello di difficoltà, stai attento a digitare il numero giusto, ricorda deve essere 0, 1 o 2 !!! ⚠️ ⚠️ ⚠️")
        break;
}


// Il computer deve generare 16 numeri casuali tra 1 e 100 (80liv medio, 50liv difficile).
randomNumbers = [];
/**
 * Funzione che genera numero random tra un min e un max
 * @param - min - valore minimo
 * @param - max - valore massimo
 */
function getRandomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//Ciclo che randomizza le 16 bombe
while (randomNumbers.length < 16) {
      randomPc = (getRandomNumbers(1, numMax));

      // I numeri non possono essere duplicati
      if (randomNumbers.includes(randomPc) == false){
          randomNumbers.push(randomPc);
      }
}
console.log(randomNumbers);

//Lista numeri inseriti dall'utente
userNumbers = [];
counter = 0;
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
for (var i = 0; i <= attempts; i++ ){
    randomUserNumbers = Number(prompt("💣 Schiva le mine. Inserisci un numero tra 1 e " + numMax));

    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    if (randomNumbers.includes(randomUserNumbers) == true){
        alert("GAME OVER! Hai preso una mina 💥");
        //Qualora l'utente incrocia una bomba, uscire dal ciclo per dichiarare la sconfitta
        break;
    }
    //Verifica che in numeri inseriti siano realmente numeri e non stringhe.
    else if (isNaN(randomUserNumbers)){
        alert("🛑  ATTENZIONE! Puoi inserire solo numeri! 🛑");
    }
    //Verifica che i numeri inseriti siano compresi tra 1 e 100
    else if (randomUserNumbers <= 0 || randomUserNumbers > numMax){
        alert("🛑 ATTENZIONE! Inserisci un numero valido: deve essere compreso tra 1 e " + numMax);
    }
    // L’utente non può inserire più volte lo stesso numero.
    else if (userNumbers.includes(randomUserNumbers) == true) {
        alert("🛑 Hai già usato questo numero. Clicca su OK e inserisci un numero DIVERSO! 🛑");
    } 
    //Se tutte le condizioni rispettano le regole, allora è possibile pushare il numero nella lista dell'utente
    else {
        userNumbers.push(randomUserNumbers);
    }
    //Variabile contatore che col passare dei giri aumenta di 1 al fine di poter comunicare il punteggio all'utente
    counter++
} 

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
alert("🕹️ Il Tuo punteggio è " + counter);
alert("le bombe che hai schivato sono 💣  " + userNumbers);


// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti
if ( i <= attempts){
    alert("🔄 Riaggorna la pagina se vuoi ritentare! Magari sarai più fortunato, oppure no... 😂 🍀");

} else{
    alert(" 💯 Complimenti! HAI VINTO ✌🏼 hai schivato tutte le mine: NINJA 🥷");
}



