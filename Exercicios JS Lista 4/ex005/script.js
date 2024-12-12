var undMacas =  Number(prompt("Digite quantas maçãs você vai comprar :"))
var precoUndMaca = 1.30

if (undMacas >=12){
    precoUndMaca = 1
    var calculo = undMacas * precoUndMaca
    alert(`Você comprou ${undMacas} maçãs e saiu na promoção.
    total = ${calculo.toLocaleString("pt-br" , {style:"currency" , currency:
        "BRL"
        })}`)
}else{
    var calculo = undMacas * precoUndMaca
    alert(`Você comprou  ${undMacas} maças.
    total = ${calculo.toLocaleString("pt-br" , {style:"currency" , currency:
    "BRL"
    })}`)
}