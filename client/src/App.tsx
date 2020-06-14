import Input from './Components/input';
import React,{Component} from 'react';
import Button from './Components/button'
import './App.css'
import './Components/button.css'
import './Components/input.css'

class App extends Component{
  constructor(props:any) {
    super(props);
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
        <h1 className="Title">Order System</h1>
        <div className="Show">
          <Input name="InputId" onClick={this.handleClick} id={this.handleIDChange} text="user id"/>
          <Input name="InputPass" onClick={this.handleClick} id={this.handleIDChange} text="user password"/>
          <Button name="LoginButton" onClick={this.handleClick} text="login"/>
        </div>
      </div>
    );
  }
}
export default App;