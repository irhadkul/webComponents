'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadMoreBtn = function (_HTMLElement) {
    _inherits(LoadMoreBtn, _HTMLElement);

    _createClass(LoadMoreBtn, [{
        key: '_appendinto',
        get: function get() {
            return this.getAttribute('appendinto');
        },
        set: function set(value) {
            this.setAttribute('appendinto', value);
        }
    }]);

    function LoadMoreBtn() {
        _classCallCheck(this, LoadMoreBtn);

        var _this = _possibleConstructorReturn(this, (LoadMoreBtn.__proto__ || Object.getPrototypeOf(LoadMoreBtn)).call(this));

        _this._appendinto = _this._appendinto || "";

        return _this;
    }

    _createClass(LoadMoreBtn, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            var newBtn = '<custom-btn theme=\'blue\'><span slot=\'clickedtimes\'>0</span></custom-btn>';
            this.onclick = function (event) {
                document.querySelector(_this2._appendinto).insertAdjacentHTML("beforeend", newBtn);
            };
        }
    }]);

    return LoadMoreBtn;
}(HTMLElement);

customElements.define("load-more-btn", LoadMoreBtn);