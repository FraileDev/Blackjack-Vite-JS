import _ from "underscore";

/**
 * Esta funcion se utiliza para crear una nueva baraja
 * @param {Array<string>} tiposDeCartas ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array} retorna una nueva baraja de cartas
 */
export const crearBaraja = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('TiposDeCartas es obligatorio como un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let baraja = [];

    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCartas){
            baraja.push(i + tipo);
        } 
    }

    for(let especial of tiposEspeciales){
        for(let tipo of tiposDeCartas){
            baraja.push(especial + tipo);
        }
    }

    baraja = _.shuffle( baraja ); // _ es el objeto global .shuffle es el metodo devuelve un nuevo
                                //  arreglo baraja desordenado = nuevo arreglo libreria underscore.
    console.log(baraja);
    return baraja;
}