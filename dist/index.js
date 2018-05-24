'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OutsideWrapper = function (_Component) {
  _inherits(OutsideWrapper, _Component);

  function OutsideWrapper() {
    _classCallCheck(this, OutsideWrapper);

    return _possibleConstructorReturn(this, (OutsideWrapper.__proto__ || Object.getPrototypeOf(OutsideWrapper)).apply(this, arguments));
  }

  _createClass(OutsideWrapper, [{
    key: 'handleEvent',
    value: function handleEvent(e) {
      var nodeElement = this.node;
      var condition = (!nodeElement || !nodeElement.contains(e.target)) && typeof this.props.eventHandler === 'function' && this.props.eventTypes[e.type] !== -1;
      if (condition) this.props.eventHandler(e);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var eventTypes = this.props.eventTypes;

      var handler = this.handleEvent.bind(this);
      eventTypes.forEach(function (eventType) {
        document.addEventListener(eventType, handler, false);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var eventTypes = this.props.eventTypes;

      var handler = this.handleEvent.bind(this);
      eventTypes.forEach(function (eventType) {
        document.removeEventListener(eventType, handler, true);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        { className: className, ref: function ref(node) {
            _this2.node = node;
          } },
        children
      );
    }
  }]);

  return OutsideWrapper;
}(_react.Component);

OutsideWrapper.defaultProps = {
  eventTypes: ['click']
};

OutsideWrapper.propTypes = {
  children: _propTypes2.default.element.isRequired,
  eventHandler: _propTypes2.default.func.isRequired,
  eventTypes: _propTypes2.default.array
};

exports.default = OutsideWrapper;