import React, { Component } from 'react'

//class Species extends Component {
//
//	handleClick(){
//		this.props.action(this.props.name)
//	}
//
//	render() {
//		return (
//			<div style={{border: '2px lightblue solid'}}>
//				<h5>{this.props.name}</h5>
//				<p style={
//					{ color: 'blue',
//						fontFamily: 'Courier'
//					}
//				}
//				>{this.props.status}</p>
//				<button onClick={this.handleClick.bind(this)}
//								style={{color: 'red', marginBottom: '15px'}}>FEED</button>
//			</div>
//		)
//	}
//}
//
//export default Species

// THIS IS A VIEW COMPONENT
export default function Species(props){

	function handleClick(){
		props.action(props.name)
	}

	return(
		<div>
			<h5>{props.name}</h5>
			<p>{props.status}</p>
			<button onClick={handleClick}>FEED</button>
		</div>
	)
}