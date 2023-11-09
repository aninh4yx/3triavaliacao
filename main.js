function tocaSom(idElementoAudio){
document.querySelector(idllementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll("tecla");

let contador = 0;
while(contador<listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    cons+
    t iAudio = "som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom("#som_tecla_aplausos");
        tocaSom (idAudio)
    }
    contador = contador + 1;
    console.log(contador);
}