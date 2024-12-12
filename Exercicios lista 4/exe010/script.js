// Solicita ao usuário que insira a velocidade em km/h
let velocidade = prompt("Insira a velocidade em km/h:");

// Solicita ao usuário que insira o tempo em horas
let tempo = prompt("Insira o tempo em horas:");

// Converte as entradas para números
velocidade = parseFloat(velocidade);
tempo = parseFloat(tempo);

// Calcula a distância percorrida
let distancia = velocidade * tempo;

// Exibe a distância percorrida
alert("A distância percorrida é: " + distancia + " km");
