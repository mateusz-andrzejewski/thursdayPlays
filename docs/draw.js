import {Players} from './players.js'
import {RenderTeams} from './renderTeams.js'
export class Draw{
    constructor(arrActivePlayers, allPlayers){
        this.arrActivePlayers = arrActivePlayers;
        this.arrAllPlayers = allPlayers;
        this.teamNumber = null;
        this.drawBtn = document.querySelector('.draw');
        this.comparedArr = null;
        this.arrTeams=null;
        this.teamsSkillRates = [];
        this.differenceMaxMin=null;


        this.showResults()
    }
    showResults(){
        this.drawBtn.addEventListener('click', e=>{
            //zabezpieczenie przed pusta tablica
            if(this.arrActivePlayers.length<=1)
            return window.alert(`You didn't choose enough players, please check activePlayers tab 🤔`);

            //zaciągnięcie danych z inputa
            this.teamNumber=Math.floor(document.querySelector('.setup-form-input').value);
             // zabezpieczenie przed sprawdzaniem SR zawodnika
              if(this.arrActivePlayers.length<this.teamNumber*2) return window.alert(`You have to choose more players 🤦‍♂️`)
            //zabezpieczenie przed pustym inputem
            if(this.teamNumber==="")return window.alert('Give me information about number of teams 😎');
            //zabezpieczeniem przed zbyt małym inputem
            if (this.teamNumber<2) return window.alert(`There is no sense of draw 🤔 Please put 2 teams at least, and remember that I accept only integers 😜`);
            //wywołanie funkcji  łączącej wielkie tablice
            this.compare(this.arrActivePlayers, this.arrAllPlayers);


            //wersja v2 zalezna od liczby zawodników aktywnych
            let procentBuffBetweenTeam = 0;

            if(this.arrActivePlayers.length<10){
                 procentBuffBetweenTeam = 10;
            }else{
                 procentBuffBetweenTeam = 6;
            }
            
            for(let i = 0; i<5000; i++){
                // console.log(`iteracja nr: ${i+1}`);
                this.drawingAlgorithm(this.comparedArr, this.teamNumber)
                this.teamSkillDif(this.teamsSkillRates);
                if(this.differenceMaxMin<=procentBuffBetweenTeam){
                    console.log('losowanie udane');
                    break
                }
                this.teamsSkillRates.length=0;
            }
            console.log(this.arrTeams);
            //  zwrócenie dalej treści do do rednerTeams.js
            return new RenderTeams(this.arrTeams);    
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
        //podzielenie graczy na poszczególne tablice
        const posG = arr.filter(el=>el.position==='G');
        const posD = arr.filter(el=>el.position==='D');
        const posA = arr.filter(el=>el.position==='A');

        //główna tablica  do przechowująca drużyny
        const arrTeams=[];
        this.arrTeams=arrTeams;

        //utworzenie drużyn dla Tablicy arrTeams
        this.teamCreator(teams); //zwraca do arrTeams odp ilość podtablic w formacie [team1]

        // rozdzielenie (crossing) zawodników do osobnych drużyn
        this.crossing(teams, posA, posD, posG);

        // obliczenie avg drużyn
        let itAvg = 0;
        for(const team of this.arrTeams){
            this.teamsSkillRates.push(this.teamSkillRating(this.arrTeams, itAvg));
            itAvg++
        }
        
    }
    teamCreator(numberOfTeams){
        for(let i=0; i<numberOfTeams;i++){
            const squad = [];
            this.arrTeams.push(squad)
        }
    }
    randomizer(max){
        return Math.floor(Math.random()*(max-0+1))+0;
    }
    deletePlayerFromArr(arr, index){
        return arr.splice(index, 1)
    }
    crossing(numberOfTeams, posA, posD, posG){
        let iterator = 0;
        let teamIndexs = [];
        for(let i=0; i<numberOfTeams; i++){
            const index = i;
            teamIndexs.push(index)
        }
        while(posA.length){
            if(numberOfTeams>iterator){
                const random = this.randomizer(teamIndexs.length-1);
                this.arrTeams[teamIndexs[random]].push(posA[0])
                posA.shift();
                this.deletePlayerFromArr(teamIndexs, random);
                iterator++
            }else{
                iterator=0;
                for(let i=0; i<numberOfTeams; i++){
                    const index = i;
                    teamIndexs.push(index)
                }
            }
        }
        while(posD.length){
            if(numberOfTeams>iterator){
                const random = this.randomizer(teamIndexs.length-1);
                this.arrTeams[teamIndexs[random]].push(posD[0])
                posD.shift();
                this.deletePlayerFromArr(teamIndexs, random);
                iterator++
            }else{
                iterator=0;
                for(let i=0; i<numberOfTeams; i++){
                    const index = i;
                    teamIndexs.push(index)
                }
            }
        }
        while(posG.length){
            if(numberOfTeams>iterator){
                const random = this.randomizer(teamIndexs.length-1);
                this.arrTeams[teamIndexs[random]].push(posG[0])
                posG.shift();
                this.deletePlayerFromArr(teamIndexs, random);
                iterator++
            }else{
                iterator=0;
                for(let i=0; i<numberOfTeams; i++){
                    const index = i;
                    teamIndexs.push(index)
                }
            }
        }

    }
    teamSkillRating(arrTeams, whichTeam){
        const sRofTeam = [];
        arrTeams[whichTeam].forEach(el=>sRofTeam.push(el.skillRate));
        const avg =((sRofTeam.reduce((prev, next)=> (+prev) + (+next)) / (arrTeams[whichTeam].length * 5))*100).toFixed(1);
        return avg
    }
    teamSkillDif(teamSkillArr){
        const max = Math.max(...teamSkillArr);
        const min = Math.min(...teamSkillArr);
        const maxIndex = teamSkillArr.indexOf(max);
        const minIndex = teamSkillArr.indexOf(min);
        return this.differenceMaxMin = max-min;
    }
}


