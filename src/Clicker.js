import React from 'react';

class Clicker extends React.Component{
	constructor(props){
		super(props)
		this.state = {counter: 10};
	}

	handleClick(event){
		event.preventDefault();
		// console.log(this.state.counter);
		alert('Button clicked');
	}
	render(){
		return (
			<div>
				<button onClick={this.handleClick}>Click me</button>
			</div>
		);
	}
}

export default Clicker;