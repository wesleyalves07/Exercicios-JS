var undMacas = Number('Digite quantidade de maças que você vai comprar?')
var precoUndMaca = 1.30

if (undMacas >= 12) {
    precoUndMaca = 1
    var calculo = undMacas * precoUndMaca
    alert(`Você comprou ${undmacas}  de maças e saiu na promoção. total = ${calculo}`)
}