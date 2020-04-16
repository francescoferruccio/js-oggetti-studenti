// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function()
{

  // var stud = {
  //   'nome': "Mario",
  //   'cognome': "Rossi",
  //   'eta': 18
  // }
  //
  // for (var key in stud) {
  //   console.log(key + ": " + stud[key]);
  // }

  // VARIABILI GLOBALI
  var totStudenti;

  // inizializzazione handlebars
  var source = $("#studente-template").html();
  var template = Handlebars.compile(source);

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

  // stampo in console la lista iniziale
  console.log("LISTA INIZIALE");

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

  totStudenti = i+1;

  // inserimento dinamico nuovi studenti al click sul bottone
  $("button").click(insertStudent);

  // inserimento dinamico nuovi studenti premendo invio quando sono in uno dei campi di input
  $("input").focusin().keyup(
    function (event) {
      if(event.which == 13) {
        insertStudent();
      }
    }
  )


  // DICHIARAZIONE FUNZIONI

  // funzione che inserisce il nuovo studente nell'array e lo stampa in pagina
  function insertStudent() {
    var inputNome = $("input[name='nome']").val();
    var inputCognome = $("input[name='cognome']").val();
    var inputEta = $("input[name='eta']").val();

    // controllo che i dati inseriti siano corretti
    if (inputNome != "" && inputCognome != "" && inputEta != "" && !isNaN(inputEta)) {
      // creo un nuovo oggetto "studente" con i dati inseriti dall'utente
      var inputObj = {
        'nome': inputNome,
        'cognome': inputCognome,
        'eta': parseInt(inputEta)
      }

      listaStudenti.push(inputObj);

      var context = {number: totStudenti, name: inputObj.nome, surname: inputObj.cognome, age: inputObj.eta };
      var html = template(context);

      $(".container").append(html);
      totStudenti++;

      // svuoto i campi di input
      $("input[name='nome']").val("");
      $("input[name='cognome']").val("");
      $("input[name='eta']").val("");

      console.log("Array aggiornato", listaStudenti);
    } else {
      alert("Controlla i dati inseriti");
    }

  }

});
