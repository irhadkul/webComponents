'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomBtnHolder = function (_HTMLElement) {
    _inherits(CustomBtnHolder, _HTMLElement);

    _createClass(CustomBtnHolder, [{
        key: 'totalClickedTimes',
        set: function set(value) {
            this.setAttribute('totalclickedtimes', value);
        },
        get: function get() {
            return this.getAttribute('totalclickedtimes');
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return ['totalclickedtimes'];
        }
    }]);

    function CustomBtnHolder() {
        _classCallCheck(this, CustomBtnHolder);

        return _possibleConstructorReturn(this, (CustomBtnHolder.__proto__ || Object.getPrototypeOf(CustomBtnHolder)).call(this));
    }

    _createClass(CustomBtnHolder, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.totalClickedTimes = 0;
            this.addEventListener("buttonClicked", function (event) {
                console.log(event);
                this.totalClickedTimes = parseInt(this.totalClickedTimes) + 1;
            });
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, newVal) {}
    }]);

    return CustomBtnHolder;
}(HTMLElement);

customElements.define('custom-btn-holder', CustomBtnHolder);