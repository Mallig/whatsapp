import React from 'react';
import logo from './logo.svg';
import SignUpForm from './components/SignUpForm'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  onSubmit = (data) => {
    this.setState({loggedIn: true, formData: data, username: data.username})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {(!this.state.loggedIn
            ? <SignUpForm onSubmit={this.onSubmit}/>
            : <p>And the username is: {this.state.username}</p>
          )}
        </header>
      </div>
    );
  }





}

export default App;
