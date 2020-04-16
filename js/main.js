// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// var stud = {
//   'nome': "Mario",
//   'cognome': "Rossi",
//   'eta': 18
// }
//
// for (var key in stud) {
//   console.log(key + ": " + stud[key]);
// }

var listaStudenti = [
  {
    'nome': "Mario",
    'cognome': "Rossi",
    'eta': 18
  },
  {
    'nome': "John",
    'cognome': "Doe",
    'eta': 19
  },
  {
    'nome': "Aldo",
    'cognome': "Baglio",
    'eta': 22
  },
  {
    'nome': "Giuseppe",
    'cognome': "Verdi",
    'eta': 31
  }
]

console.log("LISTA INIZIALE");

for (var i = 0; i < listaStudenti.length; i++) {
  var studente = listaStudenti[i];
  for (var key in studente) {
    console.log(key + ": " + studente[key]);
  }
}

var etaValida = false;

var inputNome = prompt("Inserisci nome");
var inputCognome = prompt("Inserisci cognome");
var inputEta;
do {
  inputEta = prompt("Inserisci eta");
  if (!isNaN(inputEta)) {
    etaValida = true;
  } else {
    alert("Inserisci un'età valida!");
  }
} while (etaValida == false);

var inputObj = {
  'nome': inputNome,
  'cognome': inputCognome,
  'eta': inputEta
}

listaStudenti.push(inputObj);

console.log("LISTA DOPO INSERIMENTO UTENTE");

for (var i = 0; i < listaStudenti.length; i++) {
  var studente = listaStudenti[i];
  for (var key in studente) {
    console.log(key + ": " + studente[key]);
  }
}
