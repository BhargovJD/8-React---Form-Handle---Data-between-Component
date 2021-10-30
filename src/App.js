import React, { Component } from 'react'
import Register from "./components/Register"
import Greet from "./components/Greet"

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isRegister: false,
      name: '',
      email: '',
      password: '',
    };
  }

  registrationHandler = (e) => {

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    this.setState({ name, email, password, isRegister: true });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {
          this.state.isRegister ? (
            <Greet name={this.state.name} email={this.state.email}></Greet>
          ) : (
            <Register submit={this.registrationHandler}></Register>
          )}
      </div>
    )
  }
}
