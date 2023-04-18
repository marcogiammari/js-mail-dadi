// creo una lista di email usando un for loop

emails = [];
names = ["mariorossi", "carloverdi", "sofianeri", "pierogialli", "annarosa", "mariaviola"]
for (let i = 0; i < names.length; i++) {
    let name = names[i];
    name += "@email.it"
    emails.push(name);
}

// associo la funzione checkEmail al bottone

checkButton = document.getElementById("checkEmailBtn");
checkButton.addEventListener("click", checkEmail);

// definisco la funzione

function checkEmail() {
    // creo variabili input utente e risultato della ricerca
    let toCheck = prompt("Inserisci email: ")
    let login = false;
    // scorro l'array e salvo il risultato in login
    for (let i = 0; i < emails.length; i++) {
        if (emails[i] == toCheck) {
            login = true;
        }
    }
    // restituisco il risultato all'utente
    if (login) {
        alert("Login effettuato");
    }
    else {
        alert("Login non riuscito");
    }
}