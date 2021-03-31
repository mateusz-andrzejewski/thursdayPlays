 import {RenderModalAllPlayers} from './renderModalAllPlayers.js'; //ew us
 import {RenderModalAddPlayer} from './renderModalAddPlayer.js'; //ew us
 export class Players{
    constructor(update){
        this.players = [
            {
                name: 'Mateusz Andrzejewski',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'Łukasz Błaszczuk',
                position: 'D',
                skillRate: '1'
            },
            {
                name: 'Przemysław Celadyn',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'Dawid Czekała',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'Dawid Dąbrowski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'Łukasz Dąbrowski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'Carmine De Lucia',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'Michał Jabłoński',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'Mateusz Jeż',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'Grzegorz Jóźwik',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'Szymon Kaczyński',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'Paweł Karczewski',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'Radosław Kosiński',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'Adam Kowalski',
                position: 'D',
                skillRate: '4'
            },
            {
                name: 'Radosław Kowynia',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'Arkadiusz Krawczyk',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'Karol Krzyżankiewicz',
                position: 'D',
                skillRate: '3'
            },
            {
                name: 'Piotr Kuźniewicz',
                position: 'A',
                skillRate: '1'
            },
            {
                name: 'Michał Kuźniewicz',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'Kamil Limok',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'Mateusz Malik',
                position: 'A',
                skillRate: '5'
            },
            {
                name: 'Marcin Markowski',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'Tomasz Nowok',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'Jakub Piechocki',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'Dawid Ptak',
                position: 'A',
                skillRate: '4'
            },
            {
                name: 'Bartek Sadło',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'Mateusz Sochacki',
                position: 'G',
                skillRate: '4'
            },
            {
                name: 'Wojciech Trojanowski',
                position: 'A',
                skillRate: '2'
            },
            {
                name: 'Jakub Umywalnik',
                position: 'A',
                skillRate: '3'
            },
            {
                name: 'Kamil Wawoczny',
                position: 'D',
                skillRate: '2'
            },
            {
                name: 'Artur Zaczkowski',
                position: 'A',
                skillRate: '1'
            },

        ];
        this.update = update; //ew us
        this.checkUpdate();   //ew us
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

}
const allplayers = new Players();

