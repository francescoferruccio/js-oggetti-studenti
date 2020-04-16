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

// creo un array di oggetti "studente"
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
];

// handlebars
var source = $("#studente-template").html();
var template = Handlebars.compile(source);

// stampo in console la lista iniziale
console.log("LISTA INIZIALE");

for (var i = 0; i < listaStudenti.length; i++) {
  var studente = listaStudenti[i];
  for (var key in studente) {
    console.log(key + ": " + studente[key]);
  }
}

var etaValida = false;

// chiedo all'utente di inserire i dati del nuovo studente e li memorizzo
var inputNome = prompt("Inserisci nome");
var inputCognome = prompt("Inserisci cognome");
var inputEta;
// chiedo all'utente di inserire l'età e controllo che sia un numero
do {
  inputEta = prompt("Inserisci eta");
  if (!isNaN(inputEta)) {
    etaValida = true;
  } else {
    alert("Inserisci un'età valida!");
  }
} while (etaValida == false);

// creo un nuovo oggetto "studente" con i dati inseriti dall'utente
var inputObj = {
  'nome': inputNome,
  'cognome': inputCognome,
  'eta': inputEta
}

// inserisco il nuovo oggetto nella lista
listaStudenti.push(inputObj);

// stampo in console la lista aggiornata
console.log("LISTA DOPO INSERIMENTO UTENTE");

for (var i = 0; i < listaStudenti.length; i++) {
  var studente = listaStudenti[i];
  for (var key in studente) {
    console.log(key + ": " + studente[key]);
  }
}


// Stampo in pagina

for (var i = 0; i < listaStudenti.length; i++) {
  var studente = listaStudenti[i];
  var context = {number: (i+1), name: studente.nome, surname: studente.cognome, age: studente.eta };
  var html = template(context);

  $(".container").append(html);
}
