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

  constructor(props) {
    super(props)
    this.state = {
      formData: {valid: true},
      currentUserName: undefined,
      currentUserId: 1,
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

  logout = () => {
    cookies.remove('whatsappSession', { path: '/' })
    this.setState({ loggedIn: false })
  }

  onSubmit = (data) => {
    this.setState({
      formData: data,
      currentUserName: data.username
    })
    const whatsappCookie = generateToken({
      name: data.username,
      currentUserName: data.username,
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

          <button onClick={this.logout}> Log Out </button>
        </NavbarWrapper>
          <div id='mainSection'>
            {this.state.loggedIn
            ? <MainScreen username={this.state.currentUserName} currentUserId={this.state.currentUserId}/>
            : <SignUpForm onSubmit={this.onSubmit}/>}
          </div>
      </div>
    )
  }
}

export default App;
