export class RenderTeams{
    constructor(teams){
        this.teams = teams;
        this.section = document.querySelector('.results');
        this.toHide = document.querySelector('.results-messageBefore');
        // this.title=null;
        // this.skillRate=null;
        // this.teamCnt = null;
        // this.skillrates = null;

        this.teamsDivs=[];
        
        this.currentSlide = 0;
        this.prevBtn=null;
        this.nextBtn=null;

        this.generateTeams(this.teams);
        this.showSlide(this.currentSlide);
     
        
    }
    generateTeams(teams){
        for(const team of teams){
            //cnt na drużynę
            const cntForTeam = document.createElement('section');
            cntForTeam.classList.add('resluts-box')
            this.section.appendChild(cntForTeam);
            //tytuł
            const title = document.createElement('h3');
            title.classList.add('results-teamName');
            title.textContent = `Team ${teams.indexOf(team)+1}`;
            cntForTeam.appendChild(title);
            //skillRate
            const skillRate = document.createElement('div');
            skillRate.classList.add('results-skillRate');
            skillRate.textContent = this.teamSkillRating(team);
            cntForTeam.appendChild(skillRate);
            //players cnt
            const playersCnt = document.createElement('div');
            playersCnt.classList.add('results-playersCnt');
            cntForTeam.appendChild(playersCnt);
            //gracze do players cnt
            team.forEach(el=>{
                const cnt = document.createElement('div');
                cnt.classList.add('results-playersCnt-player');
                playersCnt.appendChild(cnt);

                const name = document.createElement('span');
                name.classList.add('results-playersCnt-player-name');
                name.textContent = el.name;
                cnt.appendChild(name);

                const position = document.createElement('span');
                position.classList.add('results-playersCnt-player-position');
                position.textContent=el.position;
                cnt.appendChild(position);

            })
            cntForTeam.setAttribute('style', 'display: none');
            this.teamsDivs.push(cntForTeam);
        }
    }
    teamSkillRating(team){
        const sRofTeam = [];
        team.forEach(el=>sRofTeam.push(el.skillRate));
        const avg =((sRofTeam.reduce((prev, next)=> (+prev) + (+next)) / (team.length * 5))*100).toFixed(0);
        return `${avg.toString()}%`
    }
    showSlide(currentSlide){
        this.toHide.setAttribute('style', 'display: none');
        if(this.prevBtn!==null){
            const prevBtn=this.section.querySelector('.results-prevButton');
            prevBtn.remove();
            const nextBtn=this.section.querySelector('.results-nextButton');
            nextBtn.remove();
        }
        this.generateInterface();
        this.prevBtn.addEventListener('click', ()=>this.slidePrev())
        this.nextBtn.addEventListener('click', ()=>this.slideNext())
        this.teamsDivs[this.currentSlide].setAttribute('style', 'display: block');

    }
    generateInterface(){
        const prevBtn = document.createElement('div');
        prevBtn.classList.add('results-prevButton');
        this.prevBtn = prevBtn;
        const iPrev = document.createElement('i');
        iPrev.classList.add('fas');
        iPrev.classList.add('fa-chevron-circle-right');
        prevBtn.appendChild(iPrev);
        this.section.appendChild(prevBtn);

        
        const nextBtn = document.createElement('div');
        nextBtn.classList.add('results-nextButton');
        this.nextBtn = nextBtn;
        const iNext = document.createElement('i');
        iNext.classList.add('fas');
        iNext.classList.add('fa-chevron-circle-right');
        nextBtn.appendChild(iNext);
        this.section.appendChild(nextBtn);
    }
    slidePrev(){
        this.teamsDivs[this.currentSlide].setAttribute('style', 'display: none');
        this.currentSlide--;
        if(this.currentSlide<0){
            this.currentSlide = this.teams.length - 1;
        }

        this.showSlide(this.currentSlide, this.teams)
    }
    slideNext(){
        this.teamsDivs[this.currentSlide].setAttribute('style', 'display: none');
        this.currentSlide++;
        if(this.currentSlide>this.teams.length - 1){
            this.currentSlide = 0;
        }

        this.showSlide(this.currentSlide, this.teams)
    }

}