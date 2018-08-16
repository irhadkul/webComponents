class ExtendedDropdown extends HTMLSelectElement {
    constructor() {
        super();
    }
    connectedCallback(){
        console.log("Extended dropdown is connected");
        console.log('selected index:',this.selectedIndex);
        this.bindEventListeners();
    }
    bindEventListeners(){
        this.addEventListener("change", ( event) => {
            console.log('Change happened with the event:', event);
        });
    }
}
customElements.define("extended-dropdown", ExtendedDropdown, {extends: "select"});