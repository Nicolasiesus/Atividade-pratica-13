/* INDEX HTML*/

let nome 
const userName = document.getElementById("centralizarTexto")

function change() {
     nome = prompt('Digite seu nome')
     if(nome !== null) {
      userName.innerHTML = `<strong>E aí ${nome}! Você está deixando o seu site dinâmico.<strong>`
     } 
     else {}
    
}

/* CLIQUES HTML */
let count = 0
let disp = document.getElementById("display") 


function clique() {
   count ++
   disp.innerHTML = count
}

function zerar() {
   count = 0
   disp.innerHTML = count
}




