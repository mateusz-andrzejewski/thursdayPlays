 import {RenderModalAllPlayers} from './renderModalAllPlayers.js'; //ew us
 import {RenderModalAddPlayer} from './renderModalAddPlayer.js'; //ew us
 export class Players{
    constructor(update){
        this.players = [
            {
                name: 'mateusz andrzejewski',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'łukasz błaszczuk',
                position: 'G',
                skillRate: '3'
            },
            {
                name: 'przemysław celadyn',
                position: 'G',
                skillRate: '3'
            },
            {
                name: 'dawid czekała',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'dawid dąbrowski',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'łukasz dąbrowski',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'carmine de lucia',
                position: 'D',
                skillRate: '5'
            },
            {
                name: 'michał jabłoński',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'mateusz jeż',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'grzegorz jóźwik',
                position: 'A',
                skillRate: '2'
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
                skillRate: '3'
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
                skillRate: '1'
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
                name: 'kamil brol limok',
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
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'tomasz nowok',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'jakub piechocki',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'dawid ptak',
                position: 'D',
                skillRate: '5'
            },
            {
                name: 'bartek sadło',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'mateusz sochacki',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'wojciech trojanowski',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'jakub umywalnik',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'kamil wawoczny',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'artur zaczkowski',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'łukasz kamczyk',
                position: 'D',
                skillRate: '1'
            },
            {
                name: 'bartek ogoński',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'jakub Arka',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'szymon sujewicz',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'denis krupa',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'aleksander cupok',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'maciej jarząbek',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'rafal kowalski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'patryk wojaczek',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'miłosz bełbot',
                position: 'D',
                skillRate: '1'
            },
            {
                name: 'wojciech ciołczyk',
                position: 'D',
                skillRate: '1'
            },
            {
                name: 'bartosz botor',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'marcel piotrowski',
                position: 'D',
                skillRate: '1'
            },
            {
                name: 'krystian hytrek',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'aleksander rohn',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'aleksander płatek',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'adam kudzia',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'piotr gogolok',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'kamil gnida',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'fabian x',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'damian czapski',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'kamil kasiński',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'mateusz hauptman',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'marcin psurek',
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

