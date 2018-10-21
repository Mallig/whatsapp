import React from 'react';
import SignUpForm from './components/signUp/SignUpForm'
import MainScreen from './components/main/MainScreen'
import './App.css';
import Navbar from './components/main/Navbar';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      formData: {valid: true},
      username: undefined
    }
  }

  onSubmit = (data) => {
    this.setState({loggedIn: data.valid, formData: data, username: data.username})
  }
  
  render() {
    return (
      <div className="App">
        <div className="whatsapp-container">
          <Navbar/>
          {this.state.loggedIn 
          ? <MainScreen username={this.state.username}/>
          : <SignUpForm loggedIn={this.state.loggedIn} onSubmit={this.onSubmit}/>
          }
        </div>
      </div>
    )
  }
}

export default App;
