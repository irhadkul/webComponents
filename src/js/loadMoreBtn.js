class LoadMoreBtn extends HTMLElement {
    get _appendinto(){
        return this.getAttribute('appendinto');
    }
    set _appendinto(value){
         this.setAttribute('appendinto', value);
    }
    get _randomColors(){
        return this.getAttribute('random-colors').split(",");
    }
    set _randomColors(value){
         this.setAttribute('random-colors', value);
    }
    constructor() {
        super();
        this.randomColors= this._randomColors || ['blue'];
        this._appendinto = this._appendinto || "";
        
    }
    getBtnWithRandomColor(){
        let randomColor='';
        let newBtn = null;
        let randomNum='';
        randomNum = Math.random() * (this.randomColors.length - 1);
        randomNum = Math.round(randomNum);
        randomColor = this.randomColors[randomNum];
        newBtn =`<custom-btn theme='${randomColor}'><span slot='clickedtimes'>0</span></custom-btn>`;
        return newBtn;
    }
    connectedCallback(){
        
        this.onclick = (event) => {
          document.querySelector(this._appendinto).insertAdjacentHTML("beforeend",this.getBtnWithRandomColor()) ;
        }
    }

}
customElements.define("load-more-btn", LoadMoreBtn);