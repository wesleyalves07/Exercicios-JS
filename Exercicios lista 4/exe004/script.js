// Solicita ao usuário que insira uma temperatura em graus Celsius
var temperatura = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Verifica as condições e exibe a mensagem apropriada
if (temperatura < 0) {
  alert("Muito Frio");
} else if (temperatura >= 0 && temperatura <= 20) {
  alert("Frio");
} else if (temperatura >= 21 && temperatura <= 30) {
  alert("Agradável");
} else if (temperatura > 30) {
  alert("Calor");
}
