'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_React$Component) {
	_inherits(Display, _React$Component);

	function Display(props) {
		_classCallCheck(this, Display);

		var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Display, [{
		key: "drawGraph",
		value: function drawGraph() {
			return React.createElement(
				React.Fragment,
				null,
				this.props.graph.nodes.map(function (node) {
					return React.createElement("circle", { key: node.id, cx: node.x, cy: node.y,
						r: "10", strokeWidth: "2", stroke: "black", fill: "gray" });
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"svg",
				{ id: "display", width: "1080", height: "600", style: { border: '3px solid #000000' } },
				this.drawGraph()
			);
		}
	}]);

	return Display;
}(React.Component);