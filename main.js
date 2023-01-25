// - elementos - //

const area_texto = document.querySelector(".area_texto");
const mensagem = document.querySelector(".mensagem");
const btnCopy = document.getElementById("btn-copiar");

// - Funcoes encriptar e desfazer  - //
function encriptar(text) {
  let encriptar = text
    .replace(/e/g, "enter") 
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return encriptar;
}

function decriptografar(text) {
  let decriptografar = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return decriptografar;
}


// invocando os encriptadores

function btnCript() {
  const text_cript = encriptar(area_texto.value);
  mensagem.value = text_cript;
  area_texto.value = " ";
 

}
function btnDecript() {
  let text_decript = decriptografar(mensagem.value);
  area_texto.value = text_decript;
  mensagem.value = " ";

}

/* btnCopy.addEventListener("click", function () {
  area_texto.value = mensagem.value;

  //Copy text
  mensagem.select();
  document.execCommand('copy');

});*/