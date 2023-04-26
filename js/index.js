// Dichiaro le variabili

let myName;
let mySurname;
let myFavoriteColor;
let password;

// Chiedo all'utente il suo nome

myName = prompt("Inserisci il tuo nome");

// Chiedo all'utente il suo cognome

mySurname = prompt("Inserisci il tuo cognome");

// Chied all'utente il suo colore preferito

myFavoriteColor = prompt("isnerisci il tuo colore preferito");


// Genero la password da consigliare all'utente

password = myName + mySurname + myFavoriteColor + "21";

// Stampo la password consigliata

document.getElementById("password").innerHTML = `La password consigilata è  ${password}`;