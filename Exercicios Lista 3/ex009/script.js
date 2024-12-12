var horario = Number(prompt("Digite bum Horario Para Saber se é manhao, tarde, noite ou madrugada:"))

if( horario >=0 && horario<=4 ){
    alert("Voce esta de Madrugada")
} else if( horario >=5 && horario<= 11 ){
    alert("Voce esta de Manhã")
} else if( horario >=12 && horario<=17 ){
    alert("Voce esta de Tarde")
} else {
    alert("Voce esta de Noite")
}