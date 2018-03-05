import React from 'react';

class Input extends React.Component{
	render(){
		return(
			<div>
	        <label>
	          {this.props.labelName}:
	          <input 
	          	type='text' 
	          	//value={this.state.value} 
	          	//onChange={this.handleChange} 
	          />
	        </label>
			</div>
		);
	}
}

export default Input;