class CustomBtn extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ['clickedtimes'];
  }

  get _clickedtimes() {
    return this.getAttribute('clickedtimes');
  }
  set _clickedtimes(value) {
    this.setAttribute('clickedtimes', value);
  }

  constructor() {
    // Always call super first in constructor
    super();
    const shadow = this.attachShadow({
      mode: 'open'
    });
    const template = document.querySelector('#clickedText').content;
    shadow.appendChild(template.cloneNode("true"));
    if(!this._clickedtimes){
      this._clickedtimes=0;
    }
  }

  updateTemplate(attrChanged, value) {
    this.querySelectorAll(`${'[slot='+attrChanged+']'}`)[0].innerText = value;
    // Dispach the update event to the outside
    document.dispatchEvent(new CustomEvent("templateUpdated", this));
  }
  connectedCallback() {
    this.onclick = (event) => {
      this._clickedtimes = parseInt(this._clickedtimes) + 1
    }
 
  }

  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom  element attributes changed.');
    this.updateTemplate(name, newValue);
  }
}

customElements.define('custom-btn', CustomBtn);