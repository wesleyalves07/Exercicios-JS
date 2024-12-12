// Solicita ao usuário que insira uma nota
let nota = prompt("Insira uma nota de 0 a 100:");

// Converte a entrada para um número
nota = parseInt(nota);

let conceito;

// Classifica a nota de acordo com a tabela
if (nota >= 90) {
    conceito = "A";
} else if (nota >= 80) {
    conceito = "B";
} else if (nota >= 70) {
    conceito = "C";
} else if (nota >= 60) {
    conceito = "D";
} else {
    conceito = "F";
}

// Exibe o conceito
alert("Seu conceito é: " + conceito);
