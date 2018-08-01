class CustomBtnHolder extends HTMLElement {
    static get observedAttributes() {
        return ['totalclickedtimes']
    }
    set totalClickedTimes(value) {
        this.setAttribute('totalclickedtimes', value);
    }
    get totalClickedTimes() {
        return this.getAttribute('totalclickedtimes');
    }

    constructor() {
        super();
    }
    connectedCallback() {
        this.totalClickedTimes = 0;
        this.addEventListener("buttonClicked", function (event) {
            console.log(event);
            this.totalClickedTimes = parseInt(this.totalClickedTimes) + 1;
        });
    }

}
customElements.define('custom-btn-holder', CustomBtnHolder);