import React from 'react'
import SignUpHelper from '../../utils/signUp/SignUpHelper'
import InvalidDetailsError from './InvalidDetailsError';
import WelcomeMessage from './WelcomeMessage'
const signUpHelper = new SignUpHelper()
class SignUpForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        username: "",
        valid: true
      }
    }
  }

  extractFormData = (username, password, confirmPassword) => {
    return {username: username.value, 
            password: password.value, 
            valid:    this.validateData(password.value, confirmPassword.value)}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.data = this.extractFormData(...e.target)
    console.log(this.data)
    this.setState({data: this.data})
    this.props.onSubmit(this.data)
  }
  
  render() {
    return (
      <div>
        {(!this.props.loggedIn
          ? <div><h1>hello you want to sign up</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor='username'>Enter your username :</label>
              <input name='username' id='username' type='text' required/><br/>
              <label htmlFor='password'>Enter your password:</label>
              <input name='password' id='password' type='password' required/><br/>
              <label htmlFor='confirm-password'>Confirm your password:</label>
              <input name='confirmPassword' id='confirmPassword' type='password' required/><br/>
              <button type='submit'>submit that s**t</button>
            </form></div>
          : <WelcomeMessage name={this.state.data.username}/>
        )}
        <InvalidDetailsError invalidDetails={!this.state.data.valid}/>
      </div>
    )
  }

  validateData = (password, confirmPassword) => {
    return signUpHelper.verifyPassword(password, confirmPassword)
  }
}

export default SignUpForm
