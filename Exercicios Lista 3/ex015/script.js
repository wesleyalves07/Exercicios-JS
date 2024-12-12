var idade = Number(prompt("digite sua idade"))
var pais = prompt("você esta no brasil ou eua")
if(pais == "brasil"  && idade > 17){
   alert("você é maior de idade e mora no brasil")
}else if(pais == "eua" && idade > 20){
   alert("você é maior de idade e mora no eua")
}else if(pais == "brasil" && idade <18){
   alert("vocé é menor de idade no brasil")
}else if(pais == "eua" && idade <21){
   alert("você é menor de idade no eua/")
}