import {Players} from './players.js';

class RenderModals{
    constructor(){
        this.cnt = document.querySelector('.cnt');
        this.allPlayersIcon = document.querySelector('.menu-vievs-all');
        this.actPlayersIcon = document.querySelector('.menu-vievs-active');
        this.addPlayerIcon = document.querySelector('.menu-vievs-add');

        this.showAllPlayersModal();
    }
    showAllPlayersModal(){
        this.allPlayersIcon.addEventListener('click', e=>{
            //utworzenie sekcji ogólnej
            const modalAllPlayers = document.createElement('section');
            document.body.appendChild(modalAllPlayers);
            modalAllPlayers.classList.add('modal-allPlayers');
            modalAllPlayers.classList.add('activeModal');
            //rozmazanie tła
            this.cnt.classList.add('nonActive');
            //utworzenie guzika
            
        })
    }
}

const renderModals = new RenderModals();