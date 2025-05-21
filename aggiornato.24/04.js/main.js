/*document.getElementById("moltiplica").onclick = function() {
    const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);

    let risultato = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
        risultato += num1;
    }
    // Gestione segno per numeri negativi
    if (num2 < 0) {
        risultato = -risultato;
    }
    document.getElementById("risult").textContent = risultato;
};*/

/*document.getElementById("moltiplica").onclick = function() {
    const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);

    let risultato = 0;
    let count = 0;
    while (count < Math.abs(num2)) {
        risultato += num1;
        count++;
    }
    // Gestione segno per numeri negativi
    if (num2 < 0) {
        risultato = -risultato;
    }
    document.getElementById("risult").textContent = risultato;
};*/
/*function moltiplicaConSomme(num1, num2) {
   /* e.preventDefault();*/

    /*let risultato = 0;
    let count = 0;
    while (count < Math.abs(num2)) {
        risultato += num1;
        count++;
    }
    if (num2 < 0) {
        risultato = -risultato;
    }
    return risultato;
}*/

/*document.getElementById("moltiplica").onclick = function() {
    /*event.preventDefault();*/ // Impedisce il reload della pagina
    /*const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);

    const risultato = moltiplicaConSomme(num1, num2);
    document.getElementById("risult").textContent = risultato;
};*/

import { moltiplicaConSomme } from './funzione.js';

document.querySelector("form").onsubmit = function(event) {
    event.preventDefault(); // Blocca il submit solo se i campi sono validi

    const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);

    // Se uno dei campi non è compilato, non fare nulla (il browser mostra già il messaggio)
    if (isNaN(num1) || isNaN(num2)) return;

    const risultato = moltiplicaConSomme(num1, num2);
    document.getElementById("risult").textContent = risultato;
};

