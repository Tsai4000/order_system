import Input from './input';
import React,{Component, useState, useEffect} from 'react';
import Button from './button'
import './Login.css'
import useLoginApi from '../../hooks/Login/loginrequest'
import 'bootstrap/dist/css/bootstrap.css';


function Login(this: any){
  const [account, handleIDChange] = useState('')
  const [password, handlePasswordChange] = useState('')
  const [{status, response}, makeRequest] = useLoginApi({user_id: account, password})
  
  function handleID(e:any) {
    handleIDChange(e.target.value);
  }
  function handlePassword(e:any) {
    handlePasswordChange(e.target.value);
  }
  function handleClick() {
        makeRequest({user_id: account, password})
  }
  return(
    <div className="Container">
    <div>
      <div className="Support"></div>
      <h1 className="Title">Order System</h1>
      <h2>         </h2>
      <div className="Show">
        <Input onClick={handleID}  text="user id"/>
        <input onChange={handlePassword} placeholder="user password" type="password" name="password"/>
      </div>
      <div>
      <h2>         </h2>
      </div>
      {/* <Link to ="/order"> */}
        <Button name="login" onClick={handleClick} text="login"/>
      {/* </Link> */}
    </div>
  </div>)
}
export default Login;