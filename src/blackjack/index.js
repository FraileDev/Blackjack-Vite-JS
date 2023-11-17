import _ from 'underscore';
import { crearBaraja, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml } from './usecases'

let baraja = [];
    let tipos = ['C', 'D', 'H', 'S'];
    let especiales = ['A', 'J', 'Q', 'K'];

    let puntajeJugador = 0,
        puntosComputadora = 0;

    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');

    const divCartaJugador = document.querySelector('#jugador-cartas');
    const puntosHtml = document.querySelectorAll('small');
    const divCartaComputadora = document.querySelector('#computadora-cartas');

    baraja = crearBaraja(tipos, especiales);

    //EVENTOS
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(baraja);
        puntajeJugador = puntajeJugador + valorCarta(carta);
        puntosHtml[0].innerHTML = puntajeJugador;

        const img = crearCartaHtml( carta );

        divCartaJugador.append(img);

        if(puntajeJugador > 21){
            console.warn('Lo siento perdiste!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntajeJugador, puntosHtml[1], divCartaComputadora, baraja);
        } else if(puntajeJugador === 21){
            console.warn('21, Genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntajeJugador, puntosHtml[1], divCartaComputadora, baraja);
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntajeJugador, puntosHtml[1], divCartaComputadora, baraja);
    });

    btnNuevo.addEventListener('click', () =>{

        console.clear();
        baraja = [];
        baraja = crearBaraja( tipos, especiales);

        puntajeJugador = 0;
        puntosComputadora = 0;

        puntosHtml[0].innerHTML = 0;
        puntosHtml[1].innerHTML = 0;

        divCartaComputadora.innerHTML = '';
        divCartaJugador.innerHTML = '';

        btnDetener.disabled = false;
        btnPedir.disabled = false;
        
    })