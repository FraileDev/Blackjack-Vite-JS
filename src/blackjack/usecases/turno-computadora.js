import { pedirCarta, valorCarta, crearCartaHtml } from './';

/** 
 * truno de la computadora
 * @param {Number} puntosMinimos puntos minimos de la computadora para gananar
 * @param {HTMLElement} puntosHtml elemnto HTML muestra los puntos
 * @param {HTMLElement} divCartaComputadora elemnto HTML para mostrar las cartas
 * @param {Array<String>} baraja 
 */
export const turnoComputadora = ( puntosMinimos, puntosHtml, divCartaComputadora, baraja = [] ) => {
        
    if( !puntosMinimos ) throw new Error('Los puntos minimos son necesarios');
    if( !puntosHtml ) throw new Error('Los puntos HTML son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(baraja);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml.innerHTML = puntosComputadora;
    
       const img = crearCartaHtml( carta ); 
        divCartaComputadora.append(img);

        if(puntosMinimos > 21){
            break;
        }
        
    } while ( (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana!')
        }else if(puntosMinimos > 21){
            alert('Computadora Gana!')
        }else if(puntosComputadora > 21){
            alert('Jugador Gana');
        }else {
            alert('Computadora Gana')
        }
    }, 100);
}