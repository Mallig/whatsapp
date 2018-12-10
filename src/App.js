import React from 'react';
import SignUpForm from './components/signUp/SignUpForm'
import {MainScreen} from './components/main/MainScreen'
import './App.css';
import NavbarWrapper from './components/main/NavbarWrapper';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      formData: {valid: true},
      username: undefined
    }
  }

  onSubmit = (data) => {
    this.setState({loggedIn: data.valid, formData: data, username: data.username})
  }
  
  render() {
    return (
      <div className="whatsapp-container">
        <NavbarWrapper>
          <button href='/'>Home</button>
          This is the Navbar
        </NavbarWrapper>
        <div id='mainSection'>
          {this.state.loggedIn 
          ? <MainScreen username={this.state.username}/>
          : <SignUpForm onSubmit={this.onSubmit}/>}
        </div>
      </div>
    )
  }
}

export default App;
