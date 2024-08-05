let vocales = ['a','e','i','o','u'];
let encriptacion = ['ai','enter','imes','ober','ufat'];

function datos(){
    return document.getElementById('texto').value;
}

function encriptar(){
    let texto = datos();
    for(let i = 0; i < vocales.length; i++){
        texto = texto.replace(vocales[i], encriptacion[i]);
    }
    console.log(texto);
}
function desencriptar(){
    let texto = datos();
    for(let i = 0; i < vocales.length; i++){
        texto = texto.replace(encriptacion[i], vocales[i]);
    }
    console.log(texto);
}
