import {Players} from './players.js';
import {RenderModalAllPlayers} from './renderModalAllPlayers.js';

export class RenderModalActivePlayers {
    constructor(){
        this.cnt=document.querySelector('.cnt');
        this.actPlayersIcon = document.querySelector('.menu-vievs-active');

        this.showActivePlayersModal();
    }

    showActivePlayersModal(){
        this.actPlayersIcon.addEventListener('click', e=>{
            //utworzenie sekcji ogólnej
            const modalActivePlayers = document.createElement('section');
            modalActivePlayers.classList.add('modal-activePlayers');
            modalActivePlayers.classList.add('activeModal');
            document.body.appendChild(modalActivePlayers);

            //rozmazanie tła
            this.cnt.classList.add('nonActive');

            //utworzenie przycisku zamknięcia
            
        })
    }
}

const activePlayer = new RenderModalActivePlayers();