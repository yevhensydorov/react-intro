import React from 'react';
import Input from './Input';
import SubmitBtn from './SubmitBtn';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      	<Input labelName='Firstname' />

				<Input labelName='Surname' />

        <Input labelName='Email' />

        <SubmitBtn />

      </form>
    );
  }
}

export default Form;