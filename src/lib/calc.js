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
	</div>
}	
// <input className="range" type="range" value={props.value} onChange={props.vvod}/>

function Itog(props){
	var mebel = props.mebel.reduce((sum, item)=>{
		return sum + item.dengi;
	}, 0);
	var stul = props.stul.reduce((sum, item)=>{
		return sum + item.dengi;
	}, 0);
	var pufic = props.pufic.reduce((sum, item)=>{
		return sum + item.dengi;
	}, 0);
	return <div className="itog">
		Итог: {mebel + stul + pufic} сом
	</div>
}

class Calc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: 0,
			mebel: [
				{name: "двухместный диван", value: 0, dengi: 0, cena: 700, img: 'image/icons_Fur-01.png'},
				{name: "трехместный диван", value: 0, dengi: 0, cena: 1050, img: 'image/icons_Fur-02.png'},
				{name: "двухместный угловой", value: 0, dengi: 0, cena: 1200, img: 'image/icons_Fur-03.png'},
				{name: "трехместный угловой", value: 0, dengi: 0, cena: 1500, img: 'image/icons_Fur-04.png'},
				{name: "подушка", value: 0, dengi: 0, cena: 80, img: 'image/icons_Fur-11.png'},
				{name: "односпальный матрас", value: 0, dengi: 0, cena: 1000, img: 'image/icons_Fur-18.png'},
				{name: "полутораспальный матрас", value: 0, dengi: 0, cena: 1250, img: 'image/icons_Fur-19.png'}
			],
			stul: [
				{name: "стул с мягким сиденьем", value: 0, dengi: 0, cena: 100, img: 'image/icons_Fur-12.png'},
				{name: "стул с мягкой спинкой и сиденьем", value: 0, dengi: 0, cena: 150, img: 'image/icons_Fur-13.png' },
				{name: "кресло для отдыха", value: 0, dengi: 0, cena: 350, img: 'image/icons_Fur-05.png'},
				{name: "кресло со спальным местом", value: 0, dengi: 0, cena: 500, img: 'image/icons_Fur-06.png'},
				{name: "кресло малое", value: 0, dengi: 0, cena: 250, img: 'image/icons_Fur-07.png'}
			],
			pufic: [
				{name: "пуфик большой", value: 0, dengi: 0, cena: 300, img: 'image/icons_Fur-08.png'},
				{name: "пуфик маленький", value: 0, dengi: 0, cena: 200, img: 'image/icons_Fur-09.png'}
			],
			itog: 0
		}
	}
	handleChange(massivName, index, e){
		var arr = this.state[massivName];
		var cena = arr[index].cena;
		if(isNaN(e.target.value)){
			return false;
		} else {
			arr[index].value = +e.target.value;
			arr[index].dengi = cena * +e.target.value;
			this.setState({
				[massivName]: arr
			})
		}
	}
	add(massivName, index, name, e){
		var arr = this.state[massivName];
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
			[massivName]: arr
		})
	}
	render(){
		const mebel = this.state.mebel.map((item, index)=>{
			return <VueMebel 
			key={index} name={item.name} 
			value={item.value} 
			vvod={this.handleChange.bind(this, "mebel", index)}
			add={this.add.bind(this, "mebel", index, "add")}
			remove={this.add.bind(this, "mebel", index, "remove")}
			dengi = {item.dengi}
			cena={item.cena}
			img={item.img}
			/>
		});
		const stul = this.state.stul.map((item, index)=>{
			return <VueMebel 
			key={index} name={item.name} 
			value={item.value} 
			vvod={this.handleChange.bind(this, "stul", index)}
			add={this.add.bind(this, "stul", index, "add")}
			remove={this.add.bind(this, "stul", index, "remove")}
			dengi = {item.dengi}
			cena={item.cena}
			img={item.img}
			/>
		});
		const pufic = this.state.pufic.map((item, index)=>{
			return <VueMebel 
			key={index} name={item.name} 
			value={item.value} 
			vvod={this.handleChange.bind(this, "pufic", index)}
			add={this.add.bind(this, "pufic", index, "add")}
			remove={this.add.bind(this, "pufic", index, "remove")}
			dengi = {item.dengi}
			cena={item.cena}
			img={item.img}
			/>
		});
		return <div>
			<h3>Диваны</h3>
			<div className="app-calc">
				{mebel}
			</div>
			<h3>стульи</h3>
			<div className="app-calc">
				{stul}
			</div>
			<h3>пуфики</h3>
			<div className="app-calc">
				{pufic}
			</div>
			<Itog mebel={this.state.mebel} stul={this.state.stul} pufic={this.state.pufic}/>
		</div>
	}
}
ReactDOM.render(
	<Calc/>,
	document.getElementById('app')
)