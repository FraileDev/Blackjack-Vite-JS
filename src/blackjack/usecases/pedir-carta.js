
/**
 * Esta funcion permite tomar una carta de la baraja
 * @param {Array<string>} baraja es un arreglo de string
 * @returns {string} Retorna la carta de la baraja
 */
 export const pedirCarta = ( baraja ) => {

    if( !baraja || baraja.length === 0){
        throw 'Ya no hay cartas en la baraja';
    }

    const carta = baraja.pop();

    return carta;
}