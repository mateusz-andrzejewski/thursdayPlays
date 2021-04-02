 import {RenderModalAllPlayers} from './renderModalAllPlayers.js'; //ew us
 import {RenderModalAddPlayer} from './renderModalAddPlayer.js'; //ew us
 export class Players{
    constructor(update){
        this.players = [
            {
                name: 'mateusz andrzejewski',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'łukasz błaszczuk',
                position: 'D',
                skillRate: '1'
            },
            {
                name: 'przemysław celadyn',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'dawid czekała',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'dawid dąbrowski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'łukasz dąbrowski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'carmine de lucia',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'michał jabłoński',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'mateusz jeż',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'grzegorz jóźwik',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'szymon kaczyński',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'paweł karczewski',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'radosław kosiński',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'adam kowalski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'radosław kowynia',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'arkadiusz krawczyk',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'karol krzyżankiewicz',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'piotr kuźniewicz',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'michał kuźniewicz',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'kamil limok',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'mateusz malik',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'marcin markowski',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'tomasz nowok',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'jakub piechocki',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'dawid ptak',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'bartek sadło',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'mateusz sochacki',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'wojciech trojanowski',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'jakub umywalnik',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'kamil wawoczny',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'artur zaczkowski',
                position: 'A',
                skillRate: '1'
            },

        ];
        this.update = update; //ew us
        this.checkUpdate();   //ew us
        this.helpIcon = document.querySelector('.menu-views-help');
        this.helpViewer(this.helpIcon);
    }

    checkUpdate(){ //ew us
        if(this.update){
            console.log('update');
            console.log(this.update);
            new RenderModalAddPlayer(this.update); //ew us
            new RenderModalAllPlayers(this.update) //ew us
        } else{
            console.log('didnt update');
            new RenderModalAddPlayer(this.players); //ew us
            new RenderModalAllPlayers(this.players); //ew us
        } //ew us
    }
    helpViewer(icon){
        icon.addEventListener('click', e=>{
            window.alert(`
Instructions:
1) Open all_Players to find and select players, after all press confirm button.
2) If you can't find out someone, move to add_Player tab, fill form and click "ADD_!".
3) Go to activePlayers tab and verify your choice, there you can edit list.
4) In teams_Settings section put number of teams, it should be an integer.
5) After above steps, click "DRAW_!" to initialize draw process.
6) After few second you will see results in bottom section.
7) For change slides use arrows.
8) If you want copy to clipboard all the result of draw just click copy icon.
            `)
        })
    }

}
const allplayers = new Players();

