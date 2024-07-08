function encriptar(){
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let mensajeEncriptado = document.getElementById('mensaje');

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        mensajeEncriptado.value = textoCifrado;
        tituloMensaje.innerHTML = "Texto encriptado con éxito!";
        parrafo.innerHTML = "";
        muñeco.src = "./static/img/muñeco.png";
    } else {    
        muñeco.src = "./static/img/muñeco.png";
        alert("Debes ingresar algún texto");
    }
}
