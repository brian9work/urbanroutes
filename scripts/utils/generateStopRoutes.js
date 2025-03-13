const maximo = 24
for (let i=19; i<=maximo; i++){
    let n=5
    for (let j=(i+1); j<=maximo; j++){
      n=n+5
      console.log(`('${i}', '${j}', NULL, '${n}', '${n}', '${n}'),`)
    }
}

const rutas = [ 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 ]

const GenerarCombinaciones = (rutas) => {
  let text = "";
  for (let i=0; i<=rutas.length; i++){
    let n=5
    for (let j=(i+1); j<rutas.length; j++){
      n=n+5
      text += `('${rutas[i]}', '${rutas[j]}', '${n}', '${n}', '${n}'), ` ;
    }
    text += " \n";
  }
  text += " \n";
  return text;
}
console.log(GenerarCombinaciones(rutas))
console.log(GenerarCombinaciones(rutas.reverse()))
  

