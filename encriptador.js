const d = document;
const textarea = d.querySelector(".forma__entrada")
const imagenmujer = d.querySelector(".resultado__imagen");
const bateria = d.querySelector(".loader");
const resultado = d.querySelector(".resultado__titulo");
const resultadotexto = d.querySelector(".resultado__texto");
const botonencriptar = d.querySelector(".form__btn");
const botondesencriptar = d.querySelectorAll(".form__btn");
const botoncopiar = d.querySelector(".result__btn");

const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];


//Función para encriptar
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado
}

//función para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0]);

    }
return mensajeDesencriptado;
}


textarea.addEventListener("input", (e)=>{
    imagenmujer.style.display = "none";
    bateria.classList.remove("hidden");
    resultado.textContent = "Capturando Mensaje.";
    resultadotexto.textContent ="";

})

botonencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadotexto.textContent = mensajeEncriptado;
    botoncopiar.classList.remove("hidden");
    resultado.textContent = "El resultado es:";
})

botondesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadotexto.textContent = mensajeDesencriptado;
    resultado.textContent = "El resultado es:";
    botoncopiar.classList.remove("hidden");
})

botoncopiar.addEventListener('click', () => {
    let textocopiado = resultadotexto.textContent;
    navigator.clipboard.writeText(textocopiado).then(()=>{
        imagenmujer.style.display = "block";
        bateria.classList.add("hidden");
        resultado.textContent = "El texto fue copiado.";
        botoncopiar.classList.add("hidden");
        resultadotexto.textContent = ""
    })
})