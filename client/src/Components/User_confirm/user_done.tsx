import React,{Component, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Alert, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';


function Alertcheckout() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>已經收到您的訂單</Alert.Heading>
          <p>
            您的訂單已經收到，請於領餐時間至學餐二樓領取!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
        <Link to ="/">
          <Button variant="primary">確認訂購</Button>{' '}
        </Link>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }
  
  export default Alertcheckout;