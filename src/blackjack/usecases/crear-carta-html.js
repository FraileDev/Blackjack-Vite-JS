/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} Imagen de retorno
 */
export const crearCartaHtml = (carta) => {

    if( !carta ) throw new Error('La carta es un argumento obligatorio');

    const img = document.createElement('img');
    img.src = `assets/cartas/${carta}.png`;
    img.classList.add('carta');

    return img;
}