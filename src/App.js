import {Component} from 'react';
import './App.css';

// props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.
class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: ''
		}
	}

	nextYear = () => {  // Только стрелочная функция
		console.log('+++');
		this.setState(state => ({ //State на прямую менять нельзя только так.
			years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props
		const {position, years, text} = this.state

		console.log(this)

		return (
			<div>
				<button onClick={this.nextYear}>{text}</button>
				<h1>My name is {name}, surname - {surname}, 
					age - {years}, 
					position - {position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</div>
		)
	}
}

function App() {
	return (
		<div className='App'>
			<WhoAmI name='John' surname='Smith' link='facebook.com'/>
			<WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
		</div>
	)
}

export default App;
