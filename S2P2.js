// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/* sommare l'importo all'interno del prices con .reduce() poi sviluppare la logica di sconto
salvare la somma in una variabile
blocco if ponendo come condizion isAmbassador
se true sconto del 30% sul totale
se false nessuno sconto
blocco if sul costo totale del carrello per verificare che sia <100: se true . free shipping , se false , shipping fee
 */


const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

let utenti = [];

utenti.push (marco)
utenti.push (paul)
utenti.push (amy)


for (let i = 0 ; i < utenti.length; i++) {
  let utente = utenti[i]
  if (utenti.isAmbassador) {
    console.log(`${utente.name} ${utente.lastName} è un ambassador`);
  } else {
    console.log (`${utente.name} ${utente.lastName} non è un ambassador`)
  }
}

let ambassadors = [];

for (let i = 0; i < utenti.length; i++) {
    if (utenti[i].isAmbassador) 
    { 
        ambassadors.push(utenti[i]); 
    } 
}

console.log(ambassadors)


let prices = [34, 5, 2]
let pricesTotale = prices.reduce ((acc, price) => acc + price , 0)
let shippingCost = 50
let utenteCheEffettuaLAcquisto = paul

 if (utenteCheEffettuaLAcquisto.isAmbassador) {
    pricesTotale = pricesTotale * 30 / 100
}

if (pricesTotale <= 100) {
    pricesTotale += shippingCost; 
} 

console.log(`Il totale per ${utenteCheEffettuaLAcquisto.name} ${utenteCheEffettuaLAcquisto.lastName} è: ${pricesTotale}`);