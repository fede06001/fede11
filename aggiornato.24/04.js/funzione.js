export function moltiplicaConSomme(num1, num2) {
    let risultato = 0;
    let count = 0;
    while (count < Math.abs(num2)) {
        risultato += num1;
        count++;
    }
    if (num2 < 0) {
        risultato = -risultato;
    }
    return risultato;
}

