import {Component} from 'react';
import './App.css';

// props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.
class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++'
		}
	}

	nextYear = () => {  // Только стрелочная функция
		console.log('+++');
		this.setState(state => ({ //State на прямую менять нельзя только так.
			years: state.years + 1
		}))
	}

	render() {
		const {name, surname, link} = this.props
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
				<a href={link}>My profile</a>
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
