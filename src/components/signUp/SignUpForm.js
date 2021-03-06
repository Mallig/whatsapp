import React from 'react'
import InvalidDetailsError from './InvalidDetailsError';

class SignUpForm extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        username: "",
        valid: true
      }
    }
  }

  extractFormData = (username, password, confirmPassword) => {
    const valid = this.verifyPassword(password.value, confirmPassword.value)
    return {username: username.value, 
            password: valid ? password.value : "", 
               valid: valid}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.data = this.extractFormData(...e.target)
    this.setState({data: this.data})
    this.props.onSubmit(this.data)
  }

  verifyPassword = (password, confirmPassword) => {
    if ((password !== confirmPassword)
        || !(password.length >= 4)) {
        return false
    }
    return true
  }
  
  render() {
    return (
      <div id='signUpForm'>
        <h1>hello you want to sign up</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id='signUp-username'>
            <label htmlFor='username'>Enter your username :</label>
            <input name='username' id='username' type='text' required/><br/>
          </div>
          <div id='signUp-password'>
            <label htmlFor='password'>Enter your password:</label>
            <input name='password' id='password' type='password' required/><br/>
          </div>
          <div id='signUp-confirmPassword'>
            <label htmlFor='confirmPassword'>Confirm your password:</label>
            <input name='confirmPassword' id='confirmPassword' type='password' required/><br/>
          </div>
          <button type='submit'>submit that s**t</button>
        </form>
        <InvalidDetailsError invalidDetails={!this.state.data.valid}/>
      </div>
    )
  }
}

export default SignUpForm
