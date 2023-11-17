/**
 * Esta funcion asigna un valor a la carta tomada de la baraja
 * @param {String} carta 
 * @returns {Number} Retrona el valor de la carta tomada de la baraja
 */
export const valorCarta = ( carta ) => {

    let valor = carta.substring(0, carta.length -1);

    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
}
