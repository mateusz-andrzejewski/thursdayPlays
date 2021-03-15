import {Players} from './players.js';

export class RenderModalAllPlayers{
    constructor(){
        this.instanceOfPlayers = new Players();
        this.cnt = document.querySelector('.cnt');
        this.allPlayersIcon = document.querySelector('.menu-vievs-all');

        this.closeButton = null;
        this.modalAllPlayersCntList = null;
        this.playersActiveStatus = [];
        this.confirmActiveButton = null;
        this.input = null

        this.showAllPlayersModal();
    }
    showAllPlayersModal(){
        this.allPlayersIcon.addEventListener('click', e=>{
            //sprawdzenie czy taki modal już istnieje
            if(document.querySelector('.modal-allPlayers')) return;

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
            this.input = modalAllPlayersCntInput;
            //utworzenie listy zawodników
            const modalAllPlayersCntList = document.createElement('div');
            modalAllPlayersCntList.classList.add('modal-allPlayers-cnt-list');
            modalAllPlayersCnt.appendChild(modalAllPlayersCntList);
            //utworzenie w konstrukorze zmiennej, aby mieć do niej dostęp z innych funkcji
            this.modalAllPlayersCntList = modalAllPlayersCntList;
            
            //utworzenie tytułu listy zawodników
            const modalAllPlayersCntListTitle = document.createElement('h4');
            modalAllPlayersCntListTitle.classList.add('modal-allPlayers-cnt-list-title');
            modalAllPlayersCntListTitle.textContent='Click to select the player';
            this.modalAllPlayersCntList.appendChild(modalAllPlayersCntListTitle);

            //wywołanie funkcji dodającej wszystkich graczy do modala
            this.addAllPlayersToModal();

            //utworzenie przycisku potwierdzenia
            const modalAllPlayersCntConfirm = document.createElement('button');
            modalAllPlayersCntConfirm.classList.add('modal-allPlayers-cnt-confirm');
            modalAllPlayersCntConfirm.textContent='confirm_!';
            modalAllPlayers.appendChild(modalAllPlayersCntConfirm);
            this.confirmActiveButton = modalAllPlayersCntConfirm;


            //wywołanie funkcji potwierdzającej aktywnych zawodników
            this.confirmActivePlayers();

            //wywołanie funkcji wyszukiwującej graczy
            this.findPlayer();

        })

    }

    closeModal(){
        this.closeButton.addEventListener('click', e=>{
            const modal = document.querySelector('.activeModal');
            modal.classList.remove('activeModal');
            //przywrócenie wyraźnego tła
            this.cnt.classList.remove('nonActive');
            //usunięcie elementu modal(czyli sekcji)
            modal.remove();
        })
    }

    addAllPlayersToModal(){
        this.instanceOfPlayers.players.forEach(el=>{
            //utworzenie pojemnika na imię i pozycję zawodnika
            const modalAllPlayersCntListPlayer = document.createElement('div');
            modalAllPlayersCntListPlayer.classList.add('modal-allPlayers-cnt-list-player');
            this.modalAllPlayersCntList.appendChild(modalAllPlayersCntListPlayer);

            //utworzenie podpojemnika na imie
            const modalAllPlayersCntListPlayerName = document.createElement('span');
            modalAllPlayersCntListPlayerName.classList.add('modal-allPlayers-cnt-list-player-name');
            modalAllPlayersCntListPlayerName.textContent= el.name;
            modalAllPlayersCntListPlayer.appendChild(modalAllPlayersCntListPlayerName);
            //utworzenie podpojemnika na pozycję
            const modalAllPlayersCntListPlayerPosition = document.createElement('span');
            modalAllPlayersCntListPlayerPosition.classList.add('modal-allPlayers-cnt-list-player-position');
            modalAllPlayersCntListPlayerPosition.textContent=el.position;
            modalAllPlayersCntListPlayer.appendChild(modalAllPlayersCntListPlayerPosition);

        })

        //wywołanie funkcji aktywującej graczy
        this.addActiveStatus();

    }

    addActiveStatus(){
       const allPlayers =  [...this.modalAllPlayersCntList.querySelectorAll('.modal-allPlayers-cnt-list-player')];
       allPlayers.forEach(el=> el.addEventListener('click', e=>{
           el.classList.toggle('activePlayer');
       }))
    }

    confirmActivePlayers(){
      this.confirmActiveButton.addEventListener('click', e=>{
       //zabezpieczenie przed ponownym dodawaniem
        if(this.playersActiveStatus.length!== 0){
         return window.alert(`You chosen all active players already. If you want to change list of active players, you may do it in actvie_Players tab ;D`)
        }
      const playerCnts = this.modalAllPlayersCntList.querySelectorAll('.activePlayer');
      playerCnts.forEach(el=>{
          const obj = {};
          obj.name=el.querySelector('.modal-allPlayers-cnt-list-player-name').textContent;
          obj.position=el.querySelector('.modal-allPlayers-cnt-list-player-position').textContent;
          this.playersActiveStatus.push(obj)
      })
      //część odpowiadająca za 
      const modal = document.querySelector('.activeModal');
      modal.classList.remove('activeModal');
       //przywrócenie wyraźnego tła
      this.cnt.classList.remove('nonActive');



      console.log(this.playersActiveStatus);
      })
      
    }

    findPlayer(){
        this.input.addEventListener('input', e=>{
            const val = this.input.value.toLocaleLowerCase();
            const elems = this.modalAllPlayersCntList.querySelectorAll('.modal-allPlayers-cnt-list-player-name');

            for(const el of elems){
                const text = el.textContent.toLocaleLowerCase();

                if(text.includes(val)){
                    el.closest('.modal-allPlayers-cnt-list-player').style.setProperty('display', "");
                }else{
                    el.closest('.modal-allPlayers-cnt-list-player').style.setProperty('display', "none")
                }
            }
        })

    }
}

const renderModals = new RenderModalAllPlayers();