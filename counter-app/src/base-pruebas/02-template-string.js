




export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = "tiago";

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );