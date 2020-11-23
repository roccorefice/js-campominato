// Il computer deve generare 16 numeri casuali tra 1 e 100.
var randomNumbers = [];
function getRandomNumbers (min, max) {
    return Math.floor(Math.random() * 100);
}

while (randomNumbers.length < 16) {
      var randomPc = (getRandomNumbers(1, 100));

      // I numeri non possono essere duplicati
      if (randomNumbers.includes(randomPc) == false){
          randomNumbers.push(randomPc);
      }
}
console.log(randomNumbers);


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var userNumbers = [];

while ((userNumbers.length < 16)){
    var randomUserNumbers = Number(prompt("Inserisci un numero tra 1 e 100"));

    // L’utente non può inserire più volte lo stesso numero.
    if (userNumbers.includes(randomUserNumbers) == true) {
        alert("Inserisci un numero DIVERSO!");

        // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    } else if (randomNumbers.includes(randomUserNumbers) == true){
        haiVinto = false;
        alert("Mi dispiace, hai perso!");
        break;
    } else {
        userNumbers.push(randomUserNumbers);
    }
}  

    

   
    






// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

