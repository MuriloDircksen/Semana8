let numeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ];

const dobro = (numeros) =>{
    
    let cresc = numeros.sort((a, b)=> a - b);
    console.log(cresc)
   return numeros.map(function(numero){return numero*2})
}
console.log(dobro(numeros))

const metade = (numeros) =>{
    
    let cresc = numeros.sort((a, b)=> a - b);
   
    return numeros.map(function(numero){return numero/2})
}
console.log(metade(numeros))

const raizQuadrada = (numeros) =>{
    
    let cresc = numeros.sort((a, b)=> a - b);
    
    return numeros.map(Math.sqrt)
}
console.log(raizQuadrada(numeros))

const juntarObjetos = (a, b) =>{

    return Object.assign(a, b)
}

const objeto1 = {
    a : 1,
    b : 2
}
const objeto2 = {
    c : 1,
    d : 2
}
console.log(juntarObjetos(objeto1, objeto2))

const encontrarMinimo = (arr) =>{
    return Math.min(...arr)
}
console.log('menor numero: ' + encontrarMinimo(numeros))