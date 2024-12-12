// Solicita ao usuário que insira o valor de uma compra
var valorCompra = parseFloat(prompt("Digite o valor da compra:"));

// Verifica se o valor é superior a R$100
if (valorCompra > 100) {
  // Aplica um desconto de 10%
  var valorComDesconto = valorCompra * 0.9;
  // Formata o valor final em moeda brasileira (R$)
  var valorFormatado = valorComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // Exibe o valor final com desconto
  alert("O valor final com desconto é: " + valorFormatado);
} else {
  // Formata o valor original em moeda brasileira (R$)
  var valorOriginalFormatado = valorCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // Exibe o valor original
  alert("O valor da compra é: " + valorOriginalFormatado);
}