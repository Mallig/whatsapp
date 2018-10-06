import React from 'react';

class SignUpForm extends React.Component {
  
  render() {
    return (
    <div>
      <h1>hello you want to sign up</h1>
      <form action="/register" method="post">
        <label htmlFor='email'>Enter your email address:</label>
        <input name='email' id='email' type='email' required/><br/>
        <label htmlFor='password'>Enter your password:</label>
        <input name='password' id='password' type='password' required/><br/>
        <label htmlFor='confirm-password'>Confirm your password:</label>
        <input name='confirm-password' id='confirm-password' type='password' required/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>)
  }

}

export default SignUpForm;
