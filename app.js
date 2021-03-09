class AllPlayers{
    constructor(){
        this.allPlayersIcon = document.querySelector('.menu-vievs-all');
        this.actPlayersIcon = document.querySelector('.menu-vievs-active');
        this.addPlayerIcon = document.querySelector('.menu-vievs-add');

        this.showAllPlayersModal();
        this.showActivePlayersModal();
        this.showAddPlayerModal();
    }
    showAllPlayersModal(){
        this.allPlayersIcon.addEventListener('click', e=>{
            const modal = document.querySelector('.modal-allPlayers');
            modal.setAttribute('style', 'display: block');
            const closeBtn = modal.querySelector('.modal-allPlayers-buttonClose');
            closeBtn.addEventListener('click', e=>{
                modal.setAttribute('style', 'display: none')
            })
        })
    }
    showActivePlayersModal(){
        this.actPlayersIcon.addEventListener('click', e=>{
            const modal = document.querySelector('.modal-activePlayers');
            modal.setAttribute('style', 'display: block');
            const closeBtn = modal.querySelector('.modal-activePlayers-buttonClose');
            closeBtn.addEventListener('click', e=>{
                modal.setAttribute('style', 'display: none')
            })
        })
    }
    showAddPlayerModal(){
        this.addPlayerIcon.addEventListener('click', e=>{
            const modal = document.querySelector('.modal-addPlayer');
            modal.setAttribute('style', 'display: block');
            const closeBtn = modal.querySelector('.modal-addPlayer-buttonClose');
            closeBtn.addEventListener('click', e=>{
                modal.setAttribute('style', 'display: none')
            })
        })
    }

}
const allplayers = new AllPlayers();
