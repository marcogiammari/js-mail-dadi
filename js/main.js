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
    let toCheck = document.querySelector("#check-email").value;
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

checkButton = document.getElementById("signEmailBtn");
checkButton.addEventListener("click", signEmail);

function signEmail() {
    let toSign = document.getElementById("sign-email").value;
    let signIn = true;
    for (let i = 0; i < emails.length; i++) {
        if (toSign == emails[i]) {
            signIn = false;
        }
    }

    let signP = document.getElementById("signResult");
    signP.classList.remove("d-none");
    if (signIn) {
        emails.push(toSign);
        signP.innerText = "Iscrizione effettuata";
        signP.style.backgroundColor = "teal";
    }
    else {
        signP.innerText = "Iscrizione non riuscita";
        signP.style.backgroundColor = "crimson";
    }
}