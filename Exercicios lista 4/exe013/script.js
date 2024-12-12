var btnMais = document.querySelector("#mais");

var btnMenos = document.querySelector("#menos");

var res = document.querySelector("#res");

var contador = 0;

function incremento(){
contador++ 
res.innerText = contador
limiter()
};

btnMais.addEventListener("click",incremento);

function decremeto(){
contador--
res.innerText = contador
limiter()
};

btnMenos.addEventListener("click",decremeto);

function limiter(){
if(contador == 0){
btnMenos.setAttribute("disabled","")
} else{
    btnMenos.removeAttribute("disabled","")
}}
limiter()