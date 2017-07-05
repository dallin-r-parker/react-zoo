import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Species from './components/Species'
// THIS IS A CONTAINER COMPONENT CAUSE IT HAS STATE
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			species: [
				{name: 'Mike the Tiger', status: 'Hungry'},
				{name: 'Lion', status: 'Hungry'},
				{name: 'Bear Cat', status: 'Hungry'}
			],
			newSpecies: ''
		}
		this.feedSpecies = this.feedSpecies.bind(this)
		this.handleBindChange = this.handleBindChange.bind(this)
		this.addSpecies = this.addSpecies.bind(this)
	}

	//handleValueChange(value) {
	//	this.setState({newSpecies: value})
	//}

	feedSpecies(name) {
		const {species} = this.state
		species.map(e => {
			if (e.name === name) e.status = 'Happy'
		})
		this.setState({species})
	}

	handleBindChange(e){
	  this.setState({newSpecies: e.target.value})
	}

	addSpecies() {
		console.log("here")
		const newSpecies = {
			name: this.state.newSpecies,
			status: 'Hungry'
		}
		this.setState({
			species: [...this.state.species, newSpecies]
		})
	}

	render() {
		const speciesArr = this.state.species.map(({name, status}, i) => {
			return <Species
				key={i}
				name={name}
				status={status}
				action={this.feedSpecies}/>
		})
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<div>{speciesArr}</div>
				<div>

					<input onChange={this.handleBindChange} value={this.state.newSpecies}/>
					{/*<input onChange={e => this.handleValueChange(e.target.value)} value={this.state.newSpecies}/>*/}

					<button onClick={() => {this.addSpecies}}>Add Species</button>
				</div>

			</div>
		)
	}
}
export default App
