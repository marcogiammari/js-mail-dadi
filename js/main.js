// creo una lista di email usando un for loop

emails = [];
names = ["mariorosso", "carloverde", "sofianero", "pierogiallo", "annarosa", "mariaviola"]
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
    let toCheck = document.querySelector(".email").value;
    let login = false;
    // scorro l'array e salvo il risultato in login
    for (let i = 0; i < emails.length; i++) {
        if (emails[i] == toCheck) {
            login = true;
        }
    }
    // restituisco il risultato all'utente
    let p = document.getElementById("result");
    p.classList.remove("d-none");
    if (login) {
        p.innerText = ("Login effettuato");
        p.style.backgroundColor = "teal";
    }
    else {
        p.innerText = ("Login non riuscito");
        p.style.backgroundColor = "crimson";
    }
}