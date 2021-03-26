export class RenderTeams{
    constructor(teams){
        this.teams = teams;
        this.section = document.querySelector('.results');
        this.toHide = document.querySelector('.results-messageBefore');
        this.render(teams);
        this.title=null;
        this.skillRate=null;
    }
    render(teams){
        // console.log(teams);
        this.toHide.setAttribute('style', 'display: none');
        //nazwa drużyny slajdu
        const h3 = document.createElement('h3');
        h3.classList.add('results-teamName');
        this.section.appendChild(h3)
        this.title = h3;
        h3.textContent='Team 1' //do usunięcia

        //wskaźnik skillRate
        const skillRate = document.createElement('div');
        skillRate.classList.add('results-skillRate');
        this.section.appendChild(skillRate);
        this.skillRate = skillRate;
        skillRate.textContent='72%'; //do usunięcia

        //prevBtn
        const prevBtn = document.createElement('div');
        prevBtn.classList.add('results-prevButton');
        this.section.appendChild(prevBtn);
        const iconPrev = document.createElement('i');
        iconPrev.classList.add('fas');
        iconPrev.classList.add('fa-chevron-circle-right');
        prevBtn.appendChild(iconPrev);

        //nextBtn
        const nextBtn = document.createElement('div');
        nextBtn.classList.add('results-nextButton');
        this.section.appendChild(nextBtn);
        const iconNext = document.createElement('i');
        iconNext.classList.add('fas');
        iconNext.classList.add('fa-chevron-circle-right');
        nextBtn.appendChild(iconNext);
        
    }
}