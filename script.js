const sectionEncriptador = document.querySelector(".section-encriptador");
const palabra = document.querySelector(".inputMessage");
const buttonEncriptar = document.querySelector(".buttonEncriptar");
const buttonDesencriptar = document.querySelector(".buttonDesencriptar");

const remover = () => {
  while (sectionEncriptador.firstChild) {
    sectionEncriptador.removeChild(sectionEncriptador.firstChild);
  }
};

const eventButtonCopiar = (boton) => {
  boton.addEventListener("click", () => {
    const copiar = document.querySelector(".msjEncriptado");
    copiar.select();
    document.execCommand("copy");
    alert("Texto copiado");
  });
};

const encriptando = (dato) => {
  let texto = dato.split("");
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      texto[i] = "ai";
    }
    if (texto[i] == "e") {
      texto[i] = "enter";
    }
    if (texto[i] == "i") {
      texto[i] = "imes";
    }
    if (texto[i] == "o") {
      texto[i] = "ober";
    }
    if (texto[i] == "u") {
      texto[i] = "ufat";
    }
  }
  let textoFinal = texto.join("");
  return textoFinal;
};

const validarTrue = () => {
  const newTextarea = document.createElement("textarea");
  newTextarea.className = "msjEncriptado";

  const newButton = document.createElement("button");
  newButton.innerHTML = "copiar";
  newButton.className = "buttonCopiar";

  newTextarea.innerHTML = encriptando(palabra.value);
  newTextarea.cols = "30";
  newTextarea.rows = "10";

  sectionEncriptador.appendChild(newTextarea);
  sectionEncriptador.appendChild(newButton);

  eventButtonCopiar(newButton);
};

const validarFalse = () => {
  const newParrafo = document.createElement("p");
  newParrafo.innerHTML = "Ingrese texto con minuscula";

  sectionEncriptador.appendChild(newParrafo);
};

const validar = () => {
  const regex = /^[a-z]/;
  regex.test(palabra.value) ? validarTrue() : validarFalse();
};

const evaluar = () => {
  if (!palabra.value) {
    remover();
    const newImg = document.createElement("img");
    newImg.className = "muñeco";
    newImg.src = "./img/Muñeco.png";
    const newParrafo1 = document.createElement("p");
    const newParrafo2 = document.createElement("p");
    newParrafo1.className ="msjPrincipal";
    newParrafo2.className ="sugerencia";
    newParrafo1.innerHTML = "Ningún mensaje fue encontrado";
    newParrafo2.innerHTML ="Ingresa el texto que desees encriptar o desencriptar";
    sectionEncriptador.appendChild(newImg);
    sectionEncriptador.appendChild(newParrafo1);
    sectionEncriptador.appendChild(newParrafo2);
  }

  if (palabra.value) {
    remover();
    validar();
  }
};

const Desencriptando = () => {
  const letraa = /ai/gi,
    letrae = /enter/gi,
    letrai = /imes/gi,
    letrao = /ober/gi,
    letrau = /ufat/gi;

  const texto = palabra.value;
  const textoA = texto.replace(letraa, "a");
  const textoB = textoA.replace(letrae, "e");
  const textoC = textoB.replace(letrai, "i");
  const textoD = textoC.replace(letrao, "o");
  const textoE = textoD.replace(letrau, "u");

  return textoE;
};

const validarTrueDesencriptando = () => {
  const newTextarea = document.createElement("textarea");
  newTextarea.className = "msjDesencriptado";

  const newButton = document.createElement("button");
  newButton.innerHTML = "copiar";
  newButton.className = "buttonCopiar";

  newTextarea.innerHTML = Desencriptando();
  newTextarea.cols = "30";
  newTextarea.rows = "10";

  sectionEncriptador.appendChild(newTextarea);
  sectionEncriptador.appendChild(newButton);

  eventButtonCopiar(newButton);
};

const validarDesencriptar = () => {
  const regex = /^[a-z]/;
  regex.test(palabra.value) ? validarTrueDesencriptando() : validarFalse();
};

const evaluarDesencriptar = () => {
  if (!palabra.value) {
    remover();
    evaluar();
  }
  if (palabra.value) {
    remover();
    validarDesencriptar();
  }
};

buttonEncriptar.addEventListener("click", evaluar);
buttonDesencriptar.addEventListener("click", evaluarDesencriptar);
