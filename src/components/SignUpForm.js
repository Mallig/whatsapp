import React from 'react';

class SignUpForm extends React.Component {

  dealWithFormData = (email, password, confirmPassword) => {
    return {email: email.value, password: password.value, confirmPassword: confirmPassword.value}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.data = this.dealWithFormData(...e.target)
    console.log(this.data)
    this.props.onSubmit(this.data)
  }
  
  render() {
    return (
    <div>
      <h1>hello you want to sign up</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor='email'>Enter your email address:</label>
        <input name='email' id='email' type='text' required/><br/>
        <label htmlFor='password'>Enter your password:</label>
        <input name='password' id='password' type='password' required/><br/>
        <label htmlFor='confirm-password'>Confirm your password:</label>
        <input name='confirmPassword' id='confirmPassword' type='password' required/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>)
  }

}

export default SignUpForm;
