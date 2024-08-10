let vocales = ['e','i','a','o','u'];
let encriptacion = ['enter','imes','ai','ober','ufat'];

function quitarAparecer(a,b){
    a.forEach(element => {
        element.style.display = "block";
    });
    b.forEach(element => {
        element.style.display = "none";
    });
}
function recorrer(a,b){
    let texto = document.querySelector('.texto').value;
    let nuevoTexto = document.querySelector('.nuevo-texto');
    let quitarImg = document.querySelectorAll('.quitar');
    let aparecerTexto = document.querySelectorAll('.aparecer');
    if(texto == ''){
        quitarAparecer(quitarImg,aparecerTexto);
    }
    else{
        for(let i = 0; i < a.length; i++){
            texto = texto.replaceAll(a[i], b[i]);
        }
        quitarAparecer(aparecerTexto,quitarImg);
    }
    nuevoTexto.value = texto;
}
function quitarImg(){
    if(window.innerWidth < 1240){
        let quitarImg = document.querySelector('.img');
        quitarImg.style.display = "none";
    }
}
function encriptar(){
    recorrer(vocales,encriptacion);
    quitarImg();
}
function desencriptar(){
    recorrer(encriptacion,vocales);
    quitarImg();
}
async function copiar() {
    var textoCopiado = document.querySelector(".nuevo-texto").value;
    try {
        await navigator.clipboard.writeText(textoCopiado);
        alert("Texto copiado!");
    } catch (err) {
        alert("Error al copiar el texto");
    }
}
