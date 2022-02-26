let letra

alert("Programa que determine si una letra es consonante o volcal");

letra =  prompt("Escriba la letra que desea evaluar");
document.getElementById("letra").innerHTML = "La letra ingresada es : " + letra;

switch (letra) {
    case  "A":
      alert("ES VOCAL");
      document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
      break;
    case "E":
      alert("ES VOCAL");
      document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
      break;
    case "I":
      alert("ES VOCAL");
      document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
      break;
    case  "O":
      alert("ES VOCAL");
      document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
      break;
    case "U":
      alert("ES VOCAL");
      document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
      break;
      case "a" :
        alert("ES VOCAL");
        document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
        break;
      case "e":
        alert("ES VOCAL");
        document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
        break;
      case "i":
        alert("ES VOCAL");
        document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
        break;
      case "o":
        alert("ES VOCAL");
        document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
        break;
      case "u":
        alert("ES VOCAL");
        document.getElementById("frase").innerHTML ="La letra ingresada es: " + letra + " vocal";
        break;
    default:
      alert("ES CONSONANTE");
      document.getElementById("frase").innerHTML ="la letra ingresada es: " + letra + " consonante";
  }
  



