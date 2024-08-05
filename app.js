let vocales = ['e','i','a','o','u'];
let encriptacion = ['enter','imes','ai','ober','ufat'];

function recorrer(a,b){
    let texto = document.querySelector('.texto').value;
    let img = document.querySelector('.img');
    let sinTexto = document.querySelector('.mensaje-no-encontrado');
    if(texto == null){

    }
    else{
        img.setAttribute('disabled');
        sinTexto.setAttribute('disabled');
        for(let i = 0; i < a.length; i++){
            texto = texto.replaceAll(a[i], b[i]);
        }
    }
    
}
function encriptar(){
    recorrer(vocales,encriptacion);
}
function desencriptar(){
    recorrer(encriptacion,vocales);
}
