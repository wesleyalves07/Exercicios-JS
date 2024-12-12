var primeiroNumero = Number(prompt("Digite um numero")) 
var segundoNumero = Number(prompt("Digite outro numero "))

var troca = primeiroNumero

primeiroNumero = segundoNumero
segundoNumero = troca

alert(` ${primeiroNumero} ${segundoNumero}`)