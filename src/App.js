import React from 'react';
import SignUpForm from './components/signUp/SignUpForm'
import MainScreen from './components/main/MainScreen'
import './App.css';
import NavbarWrapper from './components/main/NavbarWrapper';
import { Cookies } from 'react-cookie'
import { generateToken } from './helpers/jwt'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      formData: {valid: true},
      username: undefined,
      cookies: new Cookies()
    }
  }

  onSubmit = (data) => {
    this.setState({
      loggedIn: data.valid,
      formData: data,
      username: data.username
    })
    const whatsappCookie = generateToken({
      name: data.username,
      username: data.username,
      id: 1
    })
    this.state.cookies.set("whatsappSession", whatsappCookie, "/") 
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
