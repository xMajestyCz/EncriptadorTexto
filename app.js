let vocales = ['a','e','i','o','u'];
let encriptacion = ['ai','enter','imes','ober','ufat'];
let texto = document.getElementById("texto").value;

function encriptar(a,b,c){
    a;
    if(a == b){
        for(let i = 1; i <= 5; i++){
            b[i] = c[i];
            i++;
        }
    }
    let botonEncriptar = document.querySelector('#encriptar');
    console.log(botonEncriptar);
}
function desencriptar(a){
    a;
    let botonDesencriptar = document.querySelector('#desencriptar');
}

encriptar(texto,vocales,encriptacion);
desencriptar(texto);