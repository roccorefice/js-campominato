// Il computer deve generare 16 numeri casuali tra 1 e 100.
var randomNumbers = [];
function getRandomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

while (randomNumbers.length < 16) {
      var randomPc = (getRandomNumbers(1, 100));

      // I numeri non possono essere duplicati
      if (randomNumbers.includes(randomPc) == false){
          randomNumbers.push(randomPc);
      }
}
console.log(randomNumbers);

//Lista numeri dell'utente
var userNumbers = [];
var attempts = 84;

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
for (var i = 0; i <= attempts; i++ ){
    var randomUserNumbers = Number(prompt("💣 Schiva le mine. Inserisci un numero tra 1 e 100 ⛳ "));

    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    if (randomNumbers.includes(randomUserNumbers) == true){
        alert("GAME OVER! Hai preso una mina 💥");
        break;
    }
    // L’utente non può inserire più volte lo stesso numero.
    else if (userNumbers.includes(randomUserNumbers) == true) {
        alert("🛑 Hai già usato questo numero. Clicca su OK e inserisci un numero DIVERSO! 🛑");
    } 
    else {
        userNumbers.push(randomUserNumbers);
    }
} 

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
alert("🕹️ Il Tuo punteggio è " + randomUserNumbers);

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti
if ( i <= attempts){
    alert("🔄 Riaggorna la pagina se vuoi ritentare! Magari sarai più fortunato, oppure no... 😂 🍀");

} else{
    alert(" 💯 Complimenti! HAI VINTO ✌🏼 hai schivato tutte le mine: NINJA 🥷");
}



