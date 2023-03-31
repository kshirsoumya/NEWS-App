import React, { Component } from 'react'


export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      rememberme:false
    }
  }

  render(){
    const {email, password, rememberme} = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <h3>Log-In</h3>
        <div>
        <label>Email:</label>
        <input type="email" value={email} onChange = {e => this.setState({email:e.target.value})}/>
        </div>
        <div>
        <label>Password:</label>
        <input type="password" value={password} onChange = {e => this.setState({password:e.target.value})}/>
        </div>
        <div>
          <label>
            <input type="checkbox" 
            cheched={rememberme}
            onChange = {e => this.setState({rememberme:e.target.checked})}/>

            Remember Me?
          </label>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
       
      </form>
    )
  }

  onSubmit = (e) =>{

  }
}

export default LoginForm;