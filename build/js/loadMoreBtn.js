class LoadMoreBtn extends HTMLElement {
    get _appendinto(){
        return this.getAttribute('appendinto');
    }
    set _appendinto(value){
         this.setAttribute('appendinto', value);
    }
    constructor() {
        super();
        this._appendinto = this._appendinto || "";
        
    }
    connectedCallback(){
        const newBtn = `<custom-btn theme='blue'><span slot='clickedtimes'>0</span></custom-btn>`;
        this.onclick = (event) => {
          document.querySelector(this._appendinto).insertAdjacentHTML("beforeend",newBtn) ;
        }
    }

}
customElements.define("load-more-btn", LoadMoreBtn);