import {Players} from './players.js'; //ew us

export class RenderModalAddPlayer{
    constructor(arrOfAllPlayers){
    this.cnt = document.querySelector('.cnt');
    this.iconAddPlayer = document.querySelector('.menu-vievs-add');
    this.closeButton=null;
    
    this.instanceOfAllPlayers = arrOfAllPlayers;
    this.modalAddPlayerCntNameStackFullNameString = null;
    this.modalAddPlayerCntPositionStackPositionOptions = null;
    this.modalAddPlayerCntPositionStackSkillOptions = null;
    this.modalAddPlayerAdd = null;//btn

    this.showModal();
    }
    showModal(){
        this.iconAddPlayer.addEventListener('click', e=>{
            //zabezpieczenie przed ponownym otwarciem
            if(document.querySelector('.modal-addPlayer')) return;

            //utworzenie modala
            const modalAddPlayer = document.createElement('section');
            modalAddPlayer.classList.add('modal-addPlayer');
            modalAddPlayer.classList.add('activeModal')
            document.body.appendChild(modalAddPlayer);

            //utworzenie przycisku zamknięcia
            const modalAddPlayerButtonClose = document.createElement('div');
            modalAddPlayerButtonClose.classList.add('modal-addPlayer-buttonClose');
            modalAddPlayer.appendChild(modalAddPlayerButtonClose);
            const icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-times-circle');
            modalAddPlayerButtonClose.appendChild(icon);

            //rozmazywanie tła
            this.cnt.classList.add('nonActive');

            //przypisanie guzika zamykającego do konstruktora
            this.closeButton = modalAddPlayerButtonClose;

            //wywołanie funkcji zamykającej oczekującej na click
            this.closeModal() 

            //utworzenie tytułu
            const modalAddPlayerTitle = document.createElement('h3');
            modalAddPlayerTitle.classList.add('modal-addPlayer-title');
            modalAddPlayerTitle.textContent='add_Player';
            modalAddPlayer.appendChild(modalAddPlayerTitle);

            //utworzenie kontenera na poniższe
            const modalAddPlayerCnt = document.createElement('div');
            modalAddPlayerCnt.classList.add('modal-addPlayer-cnt');
            modalAddPlayer.appendChild(modalAddPlayerCnt);

            //utworzenie kontenera na nameStack
            const modalAddPlayerCntNameStack = document.createElement('div');
            modalAddPlayerCntNameStack.classList.add('modal-addPlayer-cnt-nameStack');
            modalAddPlayerCnt.appendChild(modalAddPlayerCntNameStack);

            //utworzenie napisu kontenera na input full_Name
            const modalAddPlayerCntNameStackFullName = document.createElement('span');
            modalAddPlayerCntNameStackFullName.classList.add('modal-addPlayer-cnt-nameStack-fullName');
            modalAddPlayerCntNameStackFullName.textContent='full_Name';
            modalAddPlayerCntNameStack.appendChild(modalAddPlayerCntNameStackFullName);
            
            //utworzenie inputa textowego na full_Name
            const modalAddPlayerCntNameStackFullNameString = document.createElement('input');
            modalAddPlayerCntNameStackFullNameString.type = 'text';
            modalAddPlayerCntNameStackFullNameString.placeholder = 'put_Full_Name';
            modalAddPlayerCntNameStackFullNameString.classList.add('modal-addPlayer-cnt-nameStack-fullNameString');
            modalAddPlayerCntNameStack.appendChild(modalAddPlayerCntNameStackFullNameString);
            
            
            //utworzenie kontenera na pozycje
            const modalAddPlayerCntPositionStack = document.createElement('div');
            modalAddPlayerCntPositionStack.classList.add('modal-addPlayer-cnt-positionStack');
            modalAddPlayerCnt.appendChild(modalAddPlayerCntPositionStack);
            //utworzenie spana w kontenerze na pozycje
            const modalAddPlayerCntPositionStackString = document.createElement('span');
            modalAddPlayerCntPositionStackString.classList.add('modal-addPlayer-cnt-positionStack-string');
            modalAddPlayerCntPositionStackString.textContent='position (D-def., A-atack., G-goalkeeper)'
            modalAddPlayerCntPositionStack.appendChild(modalAddPlayerCntPositionStackString);
            //utworzenie selecta
            const modalAddPlayerCntPositionStackPositionOptions = document.createElement('select');
            modalAddPlayerCntPositionStackPositionOptions.name='position';
            modalAddPlayerCntPositionStackPositionOptions.setAttribute('id', 'position');
            modalAddPlayerCntPositionStackPositionOptions.classList.add('modal-addPlayer-cnt-positionStack-positon-options');
            modalAddPlayerCntPositionStack.appendChild(modalAddPlayerCntPositionStackPositionOptions);

            //utworzenie opcji do selecta
            for(let i=0;i<3;i++){
                const arr = ['G','D','A'];
                const option = document.createElement('option');
                option.value = arr[i];
                option.textContent=arr[i];
                if(i===1) option.selected='true';
                modalAddPlayerCntPositionStackPositionOptions.appendChild(option);
            }
            
            // //utworzenie kontenera na skillStack
            const modalAddPlayerCntSkillStack = document.createElement('div');
            modalAddPlayerCntSkillStack.classList.add('modal-addPlayer-cnt-skillStack');
            modalAddPlayerCnt.appendChild(modalAddPlayerCntSkillStack);
            //utworzenie spana dla skillStack
            const modalAddPlayerCntSkillStackString = document.createElement('span');
            modalAddPlayerCntSkillStackString.classList.add('modal-addPlayer-cnt-skillStack-string');
            modalAddPlayerCntSkillStackString.textContent='skill_Rate (1-low, 5-top)';
            modalAddPlayerCntSkillStack.appendChild(modalAddPlayerCntSkillStackString);
            //utworzenie selecta
            const modalAddPlayerCntPositionStackSkillOptions = document.createElement('select');
            modalAddPlayerCntPositionStackSkillOptions.setAttribute('id','skill');
            modalAddPlayerCntPositionStackSkillOptions.name='skill';
            modalAddPlayerCntPositionStackSkillOptions.classList.add('modal-addPlayer-cnt-positionStack-skill-options');
            modalAddPlayerCntSkillStack.appendChild(modalAddPlayerCntPositionStackSkillOptions);
            
            //utworzenie opcji dla selecta
            for(let i=1;i<6;i++){
                const option = document.createElement('option');
                option.value=i;
                if(i===3) option.selected='true';
                option.textContent=`${i}`;
                modalAddPlayerCntPositionStackSkillOptions.appendChild(option)
            }

            //utworzenie buttona w modalAddPlayerCnt
            const modalAddPlayerAdd = document.createElement('button');
            modalAddPlayerAdd.classList.add('modal-addPlayer-add');
            modalAddPlayerAdd.textContent='add_!';
            modalAddPlayerCnt.appendChild(modalAddPlayerAdd);
            this.modalAddPlayerAdd = modalAddPlayerAdd;

            //utworzenie danych do wysyłki
            this.modalAddPlayerCntNameStackFullNameString = modalAddPlayerCntNameStackFullNameString;
            this.modalAddPlayerCntPositionStackPositionOptions = modalAddPlayerCntPositionStackPositionOptions;
            this.modalAddPlayerCntPositionStackSkillOptions = modalAddPlayerCntPositionStackSkillOptions;

            //wywołanie funkcji dodającej gracza
            this.addNewPlayer()
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
 
 
    
    addNewPlayer(){
        this.modalAddPlayerAdd.addEventListener('click', e=>{
        //zabezpieczenie przed duplikatami
            if(this.instanceOfAllPlayers.find(el=>el.name===this.modalAddPlayerCntNameStackFullNameString.value.toLowerCase())) return window.alert(`This player exists in allPlayers tab, try to find out him!😜`);
            if(this.modalAddPlayerCntNameStackFullNameString.value.length===0 || this.modalAddPlayerCntPositionStackPositionOptions.value.length===0 ||  this.modalAddPlayerCntPositionStackSkillOptions.value.length===0) return window.alert('Please put all info!');
            this.instanceOfAllPlayers.push({
                name: this.modalAddPlayerCntNameStackFullNameString.value.toLowerCase(),
                position: this.modalAddPlayerCntPositionStackPositionOptions.value,
                skillRate: this.modalAddPlayerCntPositionStackSkillOptions.value
            })
        const modal = document.querySelector('.activeModal');
        modal.classList.remove('activeModal');
        //przywrócenie wyraźnego tła
        this.cnt.classList.remove('nonActive');
        //usunięcie elementu modal(czyli sekcji)
        modal.remove();
        console.log(this.instanceOfAllPlayers);

        return new Players(this.instanceOfAllPlayers);    
        })
    }
}
