export class RenderModalActivePlayers  {
    constructor(arrActivePlayers){
        this.arrActivePlayers = arrActivePlayers;
        this.cnt=document.querySelector('.cnt');
        this.actPlayersIcon = document.querySelector('.menu-vievs-active');
        this.closeButton = null;
        this.modalActivePlayersCntList = null;
        this.minusIcon = null;
        

        this.showActivePlayersModal();
    }

    showActivePlayersModal(){
        this.actPlayersIcon.addEventListener('click', e=>{
            //sprawdzenie czy taki modal już istnieje
            if(document.querySelector('.modal-activePlayers')) return;

            //pobranie aktualnej listy aktywnych zawodników
            console.log(this.arrActivePlayers);

            //utworzenie sekcji ogólnej
            const modalActivePlayers = document.createElement('section');
            modalActivePlayers.classList.add('modal-activePlayers');
            modalActivePlayers.classList.add('activeModal');
            document.body.appendChild(modalActivePlayers);

            //rozmazanie tła
            this.cnt.classList.add('nonActive');

            //utworzenie przycisku zamknięcia
            const buttonClose = document.createElement('div');
            buttonClose.classList.add('modal-allPlayers-buttonClose');
            modalActivePlayers.appendChild(buttonClose);
            const icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-times-circle');
            buttonClose.appendChild(icon);

            //przypisanie guzika zamykającego do konstruktora
            this.closeButton = buttonClose;

            //wywołanie funkcji zamykającej oczekującej na click
            this.closeModal() 

            //utworzenie kontenera
            const modalActivePlayersCnt = document.createElement('div');
            modalActivePlayersCnt.classList.add('modal-activePlayers-cnt');
            modalActivePlayers.appendChild(modalActivePlayersCnt);

            //utworzenie tytułu dla kontenera
            const modalActivePlayersCntTitle = document.createElement('h3');
            modalActivePlayersCntTitle.textContent = 'active_Players';
            modalActivePlayersCntTitle.classList.add('modal-activePlayers-cnt-title');
            modalActivePlayersCnt.appendChild(modalActivePlayersCntTitle);

            //utworzenie pola wyszukiwania
            // const modalActivePlayersCntInput = document.createElement('input');
            // modalActivePlayersCntInput.classList.add('modal-allPlayers-cnt-input');
            // modalActivePlayersCntInput.placeholder = 'find_Player';
            // modalActivePlayersCntInput.type = 'search';
            // modalActivePlayersCnt.appendChild(modalActivePlayersCntInput);
            // this.input = modalActivePlayersCntInput;

            //utworzenie kontenera na liste zawodników
            const modalActivePlayersCntList = document.createElement('div');
            modalActivePlayersCntList.classList.add('modal-activePlayers-cnt-list');
            modalActivePlayersCnt.appendChild(modalActivePlayersCntList);
            this.modalActivePlayersCntList = modalActivePlayersCntList;

            //utworzenie tytułu dla kontenera na liste zawodników
            const modalActivePlayersCntListTitle = document.createElement('h5');
            modalActivePlayersCntListTitle.classList.add('modal-activePlayers-cnt-list-title');
            modalActivePlayersCntListTitle.textContent='Click minus icon to remove the player';
            modalActivePlayersCntList.appendChild(modalActivePlayersCntListTitle);

            //wywołanie funkcji dodającyj aktywnych graczy do modala
            this.addActivePlayersToModal()

            //wywołanie funkcji usuwającej graczy z listy aktywnych graczy
            this.deleteActivePlayer()
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
        }); 
    } 

    addActivePlayersToModal(){
        this.arrActivePlayers.forEach(el=>{
            //utworzenie kontenera na imie i pozycje zawodnika
            const modalActivePlayersCntListPlayer = document.createElement('div');
            modalActivePlayersCntListPlayer.classList.add('modal-activePlayers-cnt-list-player');
            this.modalActivePlayersCntList.appendChild(modalActivePlayersCntListPlayer);
            //utworzenie spana na imie
            const modalActivePlayersCntListPlayerName = document.createElement('span');
            modalActivePlayersCntListPlayerName.classList.add('modal-activePlayers-cnt-list-player-name');
            modalActivePlayersCntListPlayerName.textContent=el.name;
            modalActivePlayersCntListPlayer.appendChild(modalActivePlayersCntListPlayerName);
            //utworzenie spana na pozycje
            const modalActivePlayersCntListPlayerPosition = document.createElement('span');
            modalActivePlayersCntListPlayerPosition.classList.add('modal-activePlayers-cnt-list-player-position');
            modalActivePlayersCntListPlayer.appendChild(modalActivePlayersCntListPlayerPosition);
            //utworzenie ikony minusa
            const modalActivePlayersCntListPlayerMinus = document.createElement('div');
            modalActivePlayersCntListPlayerMinus.classList.add('modal-activePlayers-cnt-list-player-minus');
            modalActivePlayersCntListPlayer.appendChild(modalActivePlayersCntListPlayerMinus);
            const icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-minus-square');
            modalActivePlayersCntListPlayerMinus.appendChild(icon);
            this.minusIcon = icon;
        })
    }

    deleteActivePlayer(){
        const btns = this.modalActivePlayersCntList.querySelectorAll('.modal-activePlayers-cnt-list-player-minus');
        btns.forEach(el=>{
            el.addEventListener('click', e=>{
                const icon = e.target;
                const iconCnt = icon.parentElement;
                const positionElement = iconCnt.previousElementSibling;
                const nameElement = positionElement.previousElementSibling.textContent;

                this.arrActivePlayers.forEach(el=>{
                    if(el.name === nameElement){
                        const index = this.arrActivePlayers.indexOf(el);
                        this.arrActivePlayers.splice(index, 1);
                        console.log(el.name);
                    }
                })
                el.closest('.modal-activePlayers-cnt-list-player').remove();
                console.log(this.arrActivePlayers);
            })
        })
        
    }

}

