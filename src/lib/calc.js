function VueMebel(props){
	return <div>
		<p className="h2">{props.name}</p>
		<p>Цена: {props.cena} сом</p>
		<img src={props.img} />
		<p> 
		<button onClick={props.remove}>-</button>
		<input value={props.value} onChange={props.vvod}/>
		<button onClick={props.add}>+</button>
		</p>
		<p>стоимость: {props.dengi} сом</p>
		<input className="range" type="range" value={props.value} onChange={props.vvod}/>
	</div>
}

function Itog(props){
	var itog = props.massiv.reduce((sum, item)=>{
		return sum + item.dengi;
	}, 0)
	return <div className="itog">
		Итог: {itog} сом
	</div>
}

class Calc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: 0,
			massiv: [
				{name: "стул с мягким сиденьем", value: 0, dengi: 0, cena: 100, img: 'image/icons_Fur-12.png'},
				{name: "стул с мягкой спинкой и сиденьем", value: 0, dengi: 0, cena: 150, img: 'image/icons_Fur-13.png' },
				{name: "кресло для отдыха", value: 0, dengi: 0, cena: 350, img: 'image/icons_Fur-05.png'},
				{name: "кресло со спальным местом", value: 0, dengi: 0, cena: 500, img: 'image/icons_Fur-06.png'},
				{name: "кресло малое", value: 0, dengi: 0, cena: 250, img: 'image/icons_Fur-07.png'},
				{name: "двухместный диван", value: 0, dengi: 0, cena: 700, img: 'image/icons_Fur-01.png'},
				{name: "трехместный диван", value: 0, dengi: 0, cena: 1050, img: 'image/icons_Fur-02.png'},
				{name: "двухместный угловой", value: 0, dengi: 0, cena: 1200, img: 'image/icons_Fur-03.png'},
				{name: "трехместный угловой", value: 0, dengi: 0, cena: 1500, img: 'image/icons_Fur-04.png'},
				{name: "подушка", value: 0, dengi: 0, cena: 80, img: 'image/icons_Fur-11.png'},
				{name: "односпальный матрас", value: 0, dengi: 0, cena: 1000, img: 'image/icons_Fur-18.png'},
				{name: "полутораспальный матрас", value: 0, dengi: 0, cena: 1250, img: 'image/icons_Fur-19.png'},
				{name: "пуфик большой", value: 0, dengi: 0, cena: 300, img: 'image/icons_Fur-08.png'},
				{name: "пуфик маленький", value: 0, dengi: 0, cena: 200, img: 'image/icons_Fur-09.png'}
			],
			itog: 0
		}
	}
	handleChange(index, e){
		var arr = this.state.massiv;
		var cena = arr[index].cena;
		if(isNaN(e.target.value)){
			return false;
		} else {
			arr[index].value = +e.target.value;
			arr[index].dengi = cena * +e.target.value;
			this.setState({
				massiv: arr
			})
		}
	}
	add(index, name, e){
		var arr = this.state.massiv;
		var val = arr[index].value;
		var cena = arr[index].cena;
		if(name == "add"){
			val++;
			arr[index].value = val;
			arr[index].dengi = val * cena;
		}
		if(name == "remove"){
			val--;
			if(val < 0){
				val = 0;
			}
			arr[index].value = val;
			arr[index].dengi = val * cena;
		}
		this.setState({
			massiv: arr
		})
	}
	render(){
		var text = this.state.massiv.map((item, index)=>{
			return <VueMebel 
			key={index} name={item.name} 
			value={item.value} 
			vvod={this.handleChange.bind(this, index)}
			add={this.add.bind(this, index, "add")}
			remove={this.add.bind(this, index, "remove")}
			dengi = {item.dengi}
			cena={item.cena}
			img={item.img}
			/>
		});
		return <div className="app-calc">
			{text}
			<Itog massiv={this.state.massiv}/>
		</div>
	}
}
ReactDOM.render(
	<Calc/>,
	document.getElementById('app')
)