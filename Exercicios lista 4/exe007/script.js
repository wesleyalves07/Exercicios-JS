// Solicita ao usuário que insira sua idade
let idade = prompt("Por favor, insira sua idade:");

// Converte a entrada para um número
idade = parseInt(idade);

let tipoIngresso;

// Verifica e exibe o tipo de ingresso apropriado
if (idade < 12) {
    tipoIngresso = "Infantil";
} else if (idade >= 12 && idade <= 17) {
    tipoIngresso = "Adolescente";
} else if (idade >= 18 && idade <= 64) {
    tipoIngresso = "Adulto";
} else {
    tipoIngresso = "Sênior";
}

// Exibe o tipo de ingresso
alert("O tipo de ingresso apropriado para você é: " + tipoIngresso);
