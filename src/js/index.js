/* 
OBJETIVOS:
1- Quando o usuario clicar no botão de veja trailer, devemos abrir a modal  com o video trailer
PAssos: 

- dar um jeito de pegar o elemento que representa o botão na tela usando o JS
- dar um jeito de identificar quando o usuário clicar no botão;
- dar um jeito de pegar o elemento da modal no js
- abrir a modal na tela


2- quando o usuario clicar no X, deve fechar a modal    
- dar um jeito de pegar o elemento e fechar a modal
- dar um jeito de identificiar quando o usuario clicou no x
- fechar a modal


*/
console.log('mostrar o document' , document);

console.log (document.querySelector(".botao-trailer"))
const botaoTrailer = document.querySelector(".botao-trailer");
const botaofecharmodal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal =  document.querySelector(".modal");
const linkdovideo = video.src;

function alternarmodal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",() => {
    alternarmodal ();
    video.setAttribute("src",linkdovideo);
} );

botaofecharmodal.addEventListener("click",() =>{
    alternarmodal ();
    video.setAttribute("src", "");
})





















