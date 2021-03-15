import {Players} from './players.js';

class RenderModals{
    constructor(){
        this.cnt = document.querySelector('.cnt');
        this.allPlayersIcon = document.querySelector('.menu-vievs-all');
        this.actPlayersIcon = document.querySelector('.menu-vievs-active');
        this.addPlayerIcon = document.querySelector('.menu-vievs-add');

        this.closeButton = null;

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

            //utworzenie guzika zamykającego
            const buttonClose = document.createElement('div');
            buttonClose.classList.add('modal-allPlayers-buttonClose');
            modalAllPlayers.appendChild(buttonClose);
            const icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-times-circle');
            buttonClose.appendChild(icon);

            //przypisanie guzika zamykającego do konstruktora
            this.closeButton = buttonClose;

            //wywołanie funkcji zamykającej oczekującej na click
            this.closeModal();

            //utworzenie Pojemnika na wszystkich zawodników
            const modalAllPlayersCnt = document.createElement('div');
            modalAllPlayersCnt.classList.add('modal-allPlayers-cnt');
            modalAllPlayers.appendChild(modalAllPlayersCnt);

            //utworzenie tytułu pojemnika
            const modalAllPlayersCntTitle = document.createElement('h3');
            modalAllPlayersCntTitle.classList.add('modal-allPlayers-cnt-title');
            modalAllPlayersCntTitle.textContent = 'all_Players'
            modalAllPlayersCnt.appendChild(modalAllPlayersCntTitle);
            //utworzenie okna wyszukiwania
            const modalAllPlayersCntInput = document.createElement('input');
            modalAllPlayersCntInput.classList.add('modal-allPlayers-cnt-input');
            modalAllPlayersCntInput.placeholder = 'find_Player';
            modalAllPlayersCntInput.type = 'search';
            modalAllPlayersCnt.appendChild(modalAllPlayersCntInput);
            //utworzenie listy zawodników
            const modalAllPlayersCntList = document.createElement('div');
            modalAllPlayersCntList.classList.add()
        })
    }

    closeModal(){
        this.closeButton.addEventListener('click', e=>{
            const modal = document.querySelector('.activeModal');
            modal.classList.remove('activeModal');
            //przywrócenie wyraźnego tła
            this.cnt.classList.remove('nonActive');
        })
    }
}

const renderModals = new RenderModals();