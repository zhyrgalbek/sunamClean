var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function VueMebel(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			{ className: "h2" },
			props.name
		),
		React.createElement(
			"p",
			null,
			"\u0426\u0435\u043D\u0430: ",
			props.cena,
			" \u0441\u043E\u043C"
		),
		React.createElement("img", { src: props.img }),
		React.createElement(
			"p",
			null,
			React.createElement(
				"button",
				{ onClick: props.remove },
				"-"
			),
			React.createElement("input", { value: props.value, onChange: props.vvod }),
			React.createElement(
				"button",
				{ onClick: props.add },
				"+"
			)
		),
		React.createElement(
			"p",
			null,
			"\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ",
			props.dengi,
			" \u0441\u043E\u043C"
		),
		React.createElement("input", { className: "range", type: "range", value: props.value, onChange: props.vvod })
	);
}

function Itog(props) {
	var itog = props.massiv.reduce(function (sum, item) {
		return sum + item.dengi;
	}, 0);
	return React.createElement(
		"div",
		{ className: "itog" },
		"\u0418\u0442\u043E\u0433: ",
		itog,
		" \u0441\u043E\u043C"
	);
}

var Calc = function (_React$Component) {
	_inherits(Calc, _React$Component);

	function Calc(props) {
		_classCallCheck(this, Calc);

		var _this = _possibleConstructorReturn(this, (Calc.__proto__ || Object.getPrototypeOf(Calc)).call(this, props));

		_this.state = {
			value: 0,
			massiv: [{ name: "стул с мягким сиденьем", value: 0, dengi: 0, cena: 100, img: 'image/icons_Fur-12.png' }, { name: "стул с мягкой спинкой и сиденьем", value: 0, dengi: 0, cena: 150, img: 'image/icons_Fur-13.png' }, { name: "кресло для отдыха", value: 0, dengi: 0, cena: 350, img: 'image/icons_Fur-05.png' }, { name: "кресло со спальным местом", value: 0, dengi: 0, cena: 500, img: 'image/icons_Fur-06.png' }, { name: "кресло малое", value: 0, dengi: 0, cena: 250, img: 'image/icons_Fur-07.png' }, { name: "двухместный диван", value: 0, dengi: 0, cena: 700, img: 'image/icons_Fur-01.png' }, { name: "трехместный диван", value: 0, dengi: 0, cena: 1050, img: 'image/icons_Fur-02.png' }, { name: "двухместный угловой", value: 0, dengi: 0, cena: 1200, img: 'image/icons_Fur-03.png' }, { name: "трехместный угловой", value: 0, dengi: 0, cena: 1500, img: 'image/icons_Fur-04.png' }, { name: "подушка", value: 0, dengi: 0, cena: 80, img: 'image/icons_Fur-11.png' }, { name: "односпальный матрас", value: 0, dengi: 0, cena: 1000, img: 'image/icons_Fur-18.png' }, { name: "полутораспальный матрас", value: 0, dengi: 0, cena: 1250, img: 'image/icons_Fur-19.png' }, { name: "пуфик большой", value: 0, dengi: 0, cena: 300, img: 'image/icons_Fur-08.png' }, { name: "пуфик маленький", value: 0, dengi: 0, cena: 200, img: 'image/icons_Fur-09.png' }],
			itog: 0
		};
		return _this;
	}

	_createClass(Calc, [{
		key: "handleChange",
		value: function handleChange(index, e) {
			var arr = this.state.massiv;
			var cena = arr[index].cena;
			if (isNaN(e.target.value)) {
				return false;
			} else {
				arr[index].value = +e.target.value;
				arr[index].dengi = cena * +e.target.value;
				this.setState({
					massiv: arr
				});
			}
		}
	}, {
		key: "add",
		value: function add(index, name, e) {
			var arr = this.state.massiv;
			var val = arr[index].value;
			var cena = arr[index].cena;
			if (name == "add") {
				val++;
				arr[index].value = val;
				arr[index].dengi = val * cena;
			}
			if (name == "remove") {
				val--;
				if (val < 0) {
					val = 0;
				}
				arr[index].value = val;
				arr[index].dengi = val * cena;
			}
			this.setState({
				massiv: arr
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var text = this.state.massiv.map(function (item, index) {
				return React.createElement(VueMebel, {
					key: index, name: item.name,
					value: item.value,
					vvod: _this2.handleChange.bind(_this2, index),
					add: _this2.add.bind(_this2, index, "add"),
					remove: _this2.add.bind(_this2, index, "remove"),
					dengi: item.dengi,
					cena: item.cena,
					img: item.img
				});
			});
			return React.createElement(
				"div",
				{ className: "app-calc" },
				text,
				React.createElement(Itog, { massiv: this.state.massiv })
			);
		}
	}]);

	return Calc;
}(React.Component);

ReactDOM.render(React.createElement(Calc, null), document.getElementById('app'));