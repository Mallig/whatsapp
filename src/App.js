import React from 'react';
import SignUpForm from './components/signUp/SignUpForm'
import MainScreen from './components/main/MainScreen'
import './App.css';
import NavbarWrapper from './components/main/NavbarWrapper';
import { Cookies } from 'react-cookie'
import { generateToken, verifyToken, currentUser } from './helpers/jwt'

const cookieName = 'whatsappSession'
const cookies = new Cookies()

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {valid: true},
      username: undefined,
      loggedIn: false
    }
  }

  componentDidMount() {
    this.loggedIn()
  }

  currentUser = async () => {
    try {
      let res = await currentUser(cookies.get(cookieName))
      this.setState({username: res})
      return res
    } catch (err) {
    }
  }

  loggedIn = async () => {
    if (cookies.get(cookieName)) {
      try {
        await verifyToken(cookies.get(cookieName))
        .then(res => this.setState({loggedIn: res}))
      } catch (err) {
      }
    }
  }

  onSubmit = (data) => {
    this.setState({
      formData: data,
      username: data.username
    })
    const whatsappCookie = generateToken({
      name: data.username,
      username: data.username,
      id: 1
    })
    cookies.set(cookieName, whatsappCookie, "/")
    this.setState({loggedIn: true})
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
            ? <MainScreen username={this.currentUser} />
            : <SignUpForm onSubmit={this.onSubmit}/>}
          </div>
      </div>
    )
  }
}

export default App;
