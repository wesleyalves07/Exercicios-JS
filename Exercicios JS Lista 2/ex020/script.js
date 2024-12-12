var moeda = Number(prompt("digite um valor"))
alert(`o valor é = ${moeda.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}`)
