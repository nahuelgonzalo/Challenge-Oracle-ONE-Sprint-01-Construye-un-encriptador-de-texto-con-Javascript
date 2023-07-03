//valores 
let texto = document.querySelector(".textoACodificar");
let textoCodificado = document.querySelector(".textoCodificado");

let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector("#copiar");

let desactivar = document.querySelector(".sinTexto");
let activar = document.querySelector(".conTexto");
//funciones


activar.style.display = "none";
btnEncriptar.addEventListener("click", function () {

    const input = document.getElementById('campo');
    if(!input.checkValidity()) {
      alert('El campo no es válido.');
    }else{
        
    desactivar.style.display = "none";
    activar.style.display = "flex";
    

    let textoCodificar = encriptarTexto();
    textoCodificado.value = textoCodificar;   
    }
    

});

btnDesencriptar.addEventListener("click",function (){
    const input = document.getElementById('campo');
    if(!input.checkValidity()) {
      alert('El campo no es válido.');
    }else{
    let texto = desencriptarTexto();
    textoCodificado.value = texto;
    }
})

btnCopiar.addEventListener("click", copiarClipBoard);

// funcion para encriptar texto
function encriptarTexto() {

    let textoEncriptar = texto.value;
    let textoEncriptado = textoEncriptar.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat")
    ;
    return textoEncriptado;
}
// funcion para desencriptar texto
function desencriptarTexto() {

    let textoDesencriptar = texto.value;
    let textoDesencriptado = textoDesencriptar.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u")
    ;
    return textoDesencriptado;
}

// funcion para copiar en el clipBoard
function copiarClipBoard(){



    textoCodificado.select();
    document.execCommand("copy");

}

