/*
  a. Chiedi all’utente il suo nome,
  b. poi chiedi il suo cognome,
  c. poi chiedi il suo colore preferito
  d. Infine scrivi sulla pagina nomecognomecolorepreferito22

  1. dichiarazione variabili
  2. Inserimento valori (Richiesta all'utente)
  3. stampare nella pagina
*/

const nome = prompt('Inserire il proprio nome');

const cognome = prompt('Inserire il proprio cognome');

const colorePreferito = prompt('Inserire il proprio colore preferito');

const datiUtenteOutput =

// `   COME DA CONSEGNA
// ${nome} ${cognome} ${colorePreferito} 22
// `;

`
Mi chiamo ${nome} ${cognome} <br>
il mio colore preferito è il ${colorePreferito} tonalit&agrave; 22
`;

document.getElementById('dati-utente').innerHTML = datiUtenteOutput