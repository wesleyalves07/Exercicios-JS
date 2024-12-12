var valor = Number(prompt("Digite o Valor da Compra"))
var desconto = prompt("Digite seu codigo de desconto")

var resultado =  valor-(valor/100*10)



if( desconto=="DESC10"){
    
    alert(`Seu valor da compra com Desconto é de ${resultado}`)
    
}else {
    alert("Cupom invalido")
    alert(`Valor da compra é de ${valor}` )
}