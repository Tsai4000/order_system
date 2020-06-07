import Input from './input';
import React,{Component} from 'react';
import Button from './button'
import './App.css'

class Login extends Component{
  constructor(props:any) {
    super(props);
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      user_id: '',
      user_password: '',
      onclick: false,
    };
  }
  handleIDChange(e:any) {
    this.setState({user_id: e.target.value});
  }
  handlePasswordChange(e:any) {
    this.setState({user_password: e.target.value});
  }
  handleClick = (e:any) => {
    this.setState({onclick: true});
  }
  render(){
    return (
      <div className="Container">
        <div>
          <div className="Support"></div>
          <h1 className="Title">Order System</h1>
          <div className="Show">
            <Input onClick={this.handleClick} id={this.handleIDChange} text="user id"/>
            <Input onClick={this.handleClick} id={this.handleIDChange} text="user password"/>
            <Button onClick={this.handleClick} text="login"/>
          </div>
        </div>
      </div>
    );
}
}
export default Login;