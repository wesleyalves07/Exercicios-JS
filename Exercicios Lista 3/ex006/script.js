var peso = Number(prompt("Digite seu peso"))
var altura = Number(prompt("Digite sua altura"))

var resultado = peso/(altura**2)

if( resultado <18.5){
    alert("Classificação Magreza")
}else if(resultado>18.5 && resultado<24.9){
    alert("Classificação Normal")
}else if(resultado>25 && resultado<29.9){
    alert("Classificação Normal")
}else{
    alert("Classificação Obesidade")
}