export class RenderTeams{
    constructor(teams){
        this.teams = teams;
        this.section = document.querySelector('.results');
        this.toHide = document.querySelector('.results-messageBefore');
        this.title=null;
        this.skillRate=null;
        this.currentTeam = null;
        this.teamCnt = null;
        
        this.currentSlide = 0;
        this.prevBtn=null;
        this.nextBtn=null;

        this.renderInterface();
        this.createTeam(teams, this.currentSlide);
        this.slidePrev(this.prevBtn, this.currentSlide, this.teams);
        this.slideNext(this.nextBtn, this.currentSlide, this.teams);
    }
    renderInterface(){
        // console.log(teams);
        this.toHide.setAttribute('style', 'display: none');
      
        //prevBtn
        const prevBtn = document.createElement('div');
        prevBtn.classList.add('results-prevButton');
        this.section.appendChild(prevBtn);
        const iconPrev = document.createElement('i');
        iconPrev.classList.add('fas');
        iconPrev.classList.add('fa-chevron-circle-right');
        prevBtn.appendChild(iconPrev);
        this.prevBtn=prevBtn;

        //nextBtn
        const nextBtn = document.createElement('div');
        nextBtn.classList.add('results-nextButton');
        this.section.appendChild(nextBtn);
        const iconNext = document.createElement('i');
        iconNext.classList.add('fas');
        iconNext.classList.add('fa-chevron-circle-right');
        nextBtn.appendChild(iconNext);
        this.nextBtn=nextBtn;
        
    }
    createTeam(teams, currentSlide){

        //nazwa drużyny slajdu
        const h3 = document.createElement('h3');
        h3.classList.add('results-teamName');
        this.section.appendChild(h3)
        this.title = h3;
        h3.textContent=`Team ${currentSlide + 1}`;
  
        //wskaźnik skillRate
        const skillRate = document.createElement('div');
        skillRate.classList.add('results-skillRate');
        this.section.appendChild(skillRate);
        this.skillRate = skillRate;
        skillRate.textContent='72%'; //do usunięcia

        //teamCnt
        const teamCnt = document.createElement('div');
        teamCnt.classList.add('results-playersCnt');
        this.teamCnt = teamCnt;
        this.section.appendChild(teamCnt);

        //utworzenie zawodników
        for(const player of teams[currentSlide]){
            const div = document.createElement('div');
            div.classList.add('results-playersCnt-player');
            this.teamCnt.appendChild(div);

            const spanName = document.createElement('span');
            spanName.classList.add('results-playersCnt-player-name');
            spanName.textContent = player.name;
            div.appendChild(spanName);

            const spanPosition = document.createElement('span');
            spanPosition.classList.add('results-playersCnt-player-position');
            spanPosition.textContent = player.position;
            div.appendChild(spanPosition);

        }
    }
    slidePrev(btn, currentSlide, teams){
        btn.addEventListener('click', e=>{
            currentSlide--
            if(currentSlide<0){
                currentSlide=teams.length-1;
            }
            this.createTeam(teams, currentSlide);
        })
    }
    slideNext(btn, currentSlide, teams){
        btn.addEventListener('click', e=>{
            currentSlide++
            if(currentSlide>teams.length-1){
                currentSlide=0;
            }
            this.createTeam(teams, currentSlide);
        })
    }
}