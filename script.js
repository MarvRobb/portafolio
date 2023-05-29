function encriptar() {
  var mensaje = document.getElementById("mensajeInput").value;
  var mensajeEncriptado = "";
  for (var i = 0; i < mensaje.length; i++) {
    var letra = mensaje[i];
    switch (letra) {
      case "e":
        mensajeEncriptado += "enter";
        break;
      case "i":
        mensajeEncriptado += "imes";
        break;
      case "a":
        mensajeEncriptado += "ai";
        break;
      case "o":
        mensajeEncriptado += "ober";
        break;
      case "u":
        mensajeEncriptado += "ufat";
        break;
      default:
        mensajeEncriptado += letra;
        break;
    }
  }
  document.getElementById("mensajeTraducido").value = mensajeEncriptado;
}

function desencriptar() {
  var mensajeEncriptado = document.getElementById("mensajeTraducido").value;
  var mensajeDesencriptado = "";
  var i = 0;
  while (i < mensajeEncriptado.length) {
    var letra = mensajeEncriptado[i];
    if (letra === "e" && mensajeEncriptado[i + 1] === "n" && mensajeEncriptado[i + 2] === "t" && mensajeEncriptado[i + 3] === "e" && mensajeEncriptado[i + 4] === "r") {
      mensajeDesencriptado += "e";
      i += 5;
    } else if (letra === "i" && mensajeEncriptado[i + 1] === "m" && mensajeEncriptado[i + 2] === "e" && mensajeEncriptado[i + 3] === "s") {
      mensajeDesencriptado += "i";
      i += 4;
    } else if (letra === "a" && mensajeEncriptado[i + 1] === "i") {
      mensajeDesencriptado += "a";
      i += 2;
    } else if (letra === "o" && mensajeEncriptado[i + 1] === "b" && mensajeEncriptado[i + 2] === "e" && mensajeEncriptado[i + 3] === "r") {
      mensajeDesencriptado += "o";
      i += 4;
    } else if (letra === "u" && mensajeEncriptado[i + 1] === "f" && mensajeEncriptado[i + 2] === "a" && mensajeEncriptado[i + 3] === "t") {
      mensajeDesencriptado += "u";
      i += 4;
    } else {
      mensajeDesencriptado += letra;
      i++;
    }
  }
  document.getElementById("mensajeTraducido").value = mensajeDesencriptado;
}

function copiar() {
  var mensajeTraducido = document.getElementById("mensajeTraducido");
  mensajeTraducido.select();
  document.execCommand("copy");
  alert("Mensaje copiado al portapapeles");
}