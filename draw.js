import {Players} from './players.js'
export class Draw{
    constructor(arrActivePlayers){
        this.arrActivePlayers = arrActivePlayers;
        this.arrAllPlayers = new Players().players;
        this.teamNumber = null;
        this.drawBtn = document.querySelector('.draw');
        this.comparedArr = null;

        this.showResults()
    }
    showResults(){
        this.drawBtn.addEventListener('click', e=>{
            //zaciągnięcie danych z inputa
            this.teamNumber=Math.floor(document.querySelector('.setup-form-input').value);
            //zabezpieczenie przed pustym inputem
            if(this.teamNumber==="")return window.alert('Give me information about number of teams 😎');
            //zabezpieczeniem przed zbyt małym inputem
            if (this.teamNumber<2) return window.alert(`There is no sense of draw 🤔 Please put 2 teams at least, and remember that I accept only integers, can you imagine half of team?😜`);
            //wywołanie funkcji korelacyjnej wielkie tablice
            this.compare(this.arrActivePlayers, this.arrAllPlayers);
            //wywołanie funkcji drawingAlgorithm
            this.drawingAlgorithm(this.comparedArr, this.teamNumber)
            
        })       
    }
    compare(active, all){
        const activeNames = active.map(el=> el.name);
        const comparedArr = [];
        for(const item of all){
            if(activeNames.includes(item.name)){
                const obj = {};
                obj.name = item.name;
                obj.position = item.position;
                obj.skillRate = item.skillRate;
                comparedArr.push(obj);   
            }
        }
        return this.comparedArr = comparedArr;
    }
    drawingAlgorithm(arr, teams){
        //ustalenie ilości zawodników w drużynie na podstawie liczby drużyn i ilości aktywnych zaw.
        const additionalPlayer = arr.length/teams%2>0 ? 1 : 0;
        const playersInTeam = Math.floor(arr.length/teams);
        console.log(playersInTeam, additionalPlayer);
        //podzielenie graczy na poszczególne tablice
        const rating4 = arr.filter(el=>el.skillRate==='4');
        const rating3 = arr.filter(el=>el.skillRate==='3');
        const rating2 = arr.filter(el=>el.skillRate==='2');
        const rating1 = arr.filter(el=>el.skillRate==='1');


        
    }
}