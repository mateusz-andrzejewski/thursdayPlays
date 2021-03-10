class Players{
    constructor(){
        this.players = [
            {
            name: 'Mateusz Andrzejewski', 
            position: 'A',
            skill: 5
            },
            {
            name: 'Radek Kosiński', 
            position: 'D',
            skill: 3
            },
            {
            name: 'Łukasz Błaszczuk', 
            position: 'D',
            skill: 2
            },            
            {
            name: 'Dawid Ptak', 
            position: 'A',
            skill: 4
            }, 
            {           
            name: 'Arkadiusz Krawczyk', 
            position: 'D',
            skill: 2
            },            
            {           
            name: 'Adam Kowalski', 
            position: 'D',
            skill: 3
            },            
            {           
            name: 'Szymon Sujewicz', 
            position: 'D',
            skill: 3
            },            
            {           
            name: 'Michał Jabłoński', 
            position: 'A',
            skill: 3
            }, 
                        {           
            name: 'Paweł Karczewski', 
            position: 'A',
            skill: 1
            } ,           
            {           
            name: 'Artur Zaczkowski', 
            position: 'A',
            skill: 1
            },            
            {           
            name: 'Szymon Kaczyński', 
            position: 'A',
            skill: 3
            },            
            {           
            name: 'Dawid Dąbrowski', 
            position: 'D',
            skill: 4
            },            
            {           
            name: 'Łukasz Dąbrowski', 
            position: 'D',
            skill: 4
            },            
            {           
            name: 'Józiu', 
            position: 'D',
            skill: 3
            },            
        
        ]
    }
}
const allplayers = new Players();

class Menu{
    constructor(){
        this.allPlayersIcon = document.querySelector('.menu-vievs-all');
        this.actPlayersIcon = document.querySelector('.menu-vievs-active');
        this.addPlayerIcon = document.querySelector('.menu-vievs-add');

        this.showAllPlayersModal();

    }
    showAllPlayersModal(){
        this.allPlayersIcon.addEventListener('click', e=>{
            const section = document.createElement('section');
            section.classList.add('modal-allPlayers');
            document.body.appendChild(section);

            const closeBtn = document.createElement('div');
            closeBtn.classList.add('modal-allPlayers-buttonClose');
            const innerBtn = document.createElement('i');
            innerBtn.classList.add('fas');
            innerBtn.classList.add('fa-times-circle');
            closeBtn.append(innerBtn);
            section.append(closeBtn);
            closeBtn.addEventListener('click', e=>{
                section.remove();
            })

            const cnt = document.createElement('div');
            cnt.classList.add('modal-allPlayers-cnt');
            section.append(cnt);

            const h3 = document.createElement('h3');
            h3.classList.add('modal-allPlayers-cnt-title');
            h3.innerText='all_Players';
            cnt.append(h3);

            const input = document.createElement('input');
            input.type='search';
            input.placeholder='find_Player';
            input.classList.add('modal-allPlayers-cnt-input');
            cnt.append(input);


            const modalCnt = document.createElement('div');
            modalCnt.classList.add('modal-allPlayers-cnt-list');
            cnt.append(modalCnt);
            
            const h4 = document.createElement('h4');
            h4.classList.add('modal-allPlayers-cnt-list-title');
            h4.innerText='Click to select the player';
            modalCnt.append(h4);

            

            allplayers.players.forEach(el=>{
            
            const modalAll = document.createElement('div');
            modalAll.classList.add('modal-allPlayers-cnt-list-player');
            modalCnt.append(modalAll);
            modalAll.addEventListener('click', e=>{
                    e.target.closest('.modal-allPlayers-cnt-list-player').classList.toggle('active');  
            })
            const playerName= document.createElement('span');
            playerName.classList.add('modal-allPlayers-cnt-list-player-name');
            playerName.innerText=el.name;
            modalAll.appendChild(playerName);
            const playerPosition = document.createElement('span');
            playerPosition.classList.add('modal-allPlayers-cnt-list-player-position');
            playerPosition.innerText=el.position;
            modalAll.appendChild(playerPosition);

            })
            
            input.addEventListener('input', e=>{
                const val = input.value.toLowerCase();
                const elems = [...document.querySelectorAll('.modal-allPlayers-cnt-list-player')];

                for (const el of elems) {
                    const text = el.innerText.toLowerCase();
                    if(text.includes(val)){
                        el.style.setProperty('display', "");
                    } else{
                        el.style.setProperty('display', 'none');

                    }
                }
            })
            
            
        })

    }

}
const menu = new Menu();
