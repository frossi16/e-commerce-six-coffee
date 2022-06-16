 const ponerEnMayuscula = (frase) => {
  let palabras = frase.toLowerCase().split(" ");
  return palabras.map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
};




export default ponerEnMayuscula;