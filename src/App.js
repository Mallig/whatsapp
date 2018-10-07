import React from 'react';
import logo from './logo.svg';
import SignUpForm from './components/signUp/SignUpForm'
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      formData: {valid: true}

    }
  }

  componentDidMount() {

  }

  onSubmit = (data) => {
    this.setState({loggedIn: data.valid, formData: data, username: data.username})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <SignUpForm loggedIn={this.state.loggedIn} onSubmit={this.onSubmit}/>
        </header>
      </div>
    );
  }
}

export default App;
