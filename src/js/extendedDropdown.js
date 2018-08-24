class ExtendedDropdown extends HTMLSelectElement {
    constructor(...args) {
        const self = super(...args);
        return self;
    }
    connectedCallback(){
        console.log("Extended dropdown is connected");
        console.log('selected index:',this.selectedIndex);
        this.bindEventListeners();
    }
    bindEventListeners(){
        this.addEventListener("change", ( event) => {
            console.log('Change happened with the event:', event);
            console.log(`Selected index is now at: ${this.selectedIndex}`);
        });
        this.addEventListener("focusin", (event)=>{
            console.log("Focus in:", event);
        });
        
        this.addEventListener("blur", (event)=>{
            console.log("Blur:", event);
        });
    }
}
customElements.define("extended-dropdown", ExtendedDropdown, {extends: "select"});