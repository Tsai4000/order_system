import Input from './input';
import React,{Component, useState, useEffect} from 'react';
import Button from './button'
import './Login.css'
import {Link} from 'react-router-dom';
import useLoginApi from '../../hooks/Login/loginrequest'
import 'bootstrap/dist/css/bootstrap.css';


function Login(this: any){
  const [account, handleIDChange] = useState('')
  const [password, handlePasswordChange] = useState('')
  const [{status, response}, makeRequest] = useLoginApi({account, password})
  
  function handleID(e:any) {
    handleIDChange(e.target.value);
  }
  function handlePassword(e:any) {
    handlePasswordChange(e.target.value);
  }
  function handleClick() {
        makeRequest()
  }
  return(
    <div className="Container">
    <div>
      <div className="Support"></div>
      <h1 className="Title">Order System</h1>
      <div className="Show">
        <Input onChange={handleID}  text="user id"/>
        <Input onChange={handlePassword}  text="user password"/>
      </div>
      <Link to ="/order">
        <Button name="login" onClick={handleClick} text="login"/>
      </Link>
    </div>
  </div>)
}
export default Login;