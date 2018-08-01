'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomBtn = function (_HTMLElement) {
  _inherits(CustomBtn, _HTMLElement);

  _createClass(CustomBtn, [{
    key: '_clickedtimes',
    get: function get() {
      return this.getAttribute('clickedtimes');
    },
    set: function set(value) {
      this.setAttribute('clickedtimes', value);
    }
  }], [{
    key: 'observedAttributes',

    // Specify observed attributes so that
    // attributeChangedCallback will work
    get: function get() {
      return ['clickedtimes'];
    }
  }]);

  function CustomBtn() {
    _classCallCheck(this, CustomBtn);

    var _this = _possibleConstructorReturn(this, (CustomBtn.__proto__ || Object.getPrototypeOf(CustomBtn)).call(this));
    // Always call super first in constructor


    var shadow = _this.attachShadow({
      mode: 'open'
    });
    var template = document.querySelector('#clickedText').content;
    shadow.appendChild(template.cloneNode("true"));
    if (!_this._clickedtimes) {
      _this._clickedtimes = 0;
    }
    return _this;
  }

  _createClass(CustomBtn, [{
    key: 'updateTemplate',
    value: function updateTemplate(attrChanged, value) {
      this.querySelectorAll('' + ('[slot=' + attrChanged + ']'))[0].innerText = value;
      // Dispach the update event to the outside
      document.dispatchEvent(new CustomEvent("templateUpdated", this));
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.onclick = function (event) {
        _this2._clickedtimes = parseInt(_this2._clickedtimes) + 1;
      };
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      console.log('Custom element removed from page.');
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom  element attributes changed.');
      this.updateTemplate(name, newValue);
    }
  }]);

  return CustomBtn;
}(HTMLElement);

customElements.define('custom-btn', CustomBtn);
