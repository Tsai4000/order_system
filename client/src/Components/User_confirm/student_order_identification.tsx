import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron, Button, Container, Accordion, Dropdown} from 'react-bootstrap'
import products from '../User_Order/product.json';
import Product from './confirm_product'
import './middle.css'
import {Link} from 'react-router-dom';

interface IProps {
}

interface IState {
    total_price?: Number;
    special_needs?: String;
    select_ti?: Number;
    price?: Number;
}

class Student_order_identification extends React.Component<IProps,IState> {
    constructor(props:any){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSpecial_needsChange = this.handleSpecial_needsChange.bind(this);
        this.state={
            special_needs: '',
            select_ti: Date.now(),
            total_price: 0,
            price: 80,
            //date: new Date(),
        }
    }

    handleSelect = (e:any) => {
        this.setState({select_ti: e.target.value});
    }

    handleSpecial_needsChange(e:any) {
        this.setState({special_needs: e.target.value});
    }

    // // handleTotalPrice = (prevState:Number,e:Number) => {
    // //     this.setState({total_price: prevState.total_price + e.})
    // }

    static defaultProps = {date:{}};

    render(){
        //const {total_price} = this.props;
        //const {date} = this.props;
        const TEN_MINUTES = 10 * 60 * 1000;
        //const timeNow = new Date().toLocaleTimeString();
        const timestamp = Date.now();
        const TEN_AFTER = timestamp + TEN_MINUTES;
        const TWENTY_AFTER = timestamp + 2*TEN_MINUTES;
        const THIRTY_AFTER = timestamp + 3*TEN_MINUTES;
        const FOURTY_AFTER = timestamp + 4*TEN_MINUTES;
        const timeNow = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
        const timeTEN_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(TEN_AFTER);
        const timeTWENTY_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(TWENTY_AFTER);
        const timeTHIRTY_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(THIRTY_AFTER);
        const timeFOURTY_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(FOURTY_AFTER);
        return(
    <div>
        <>
            <Jumbotron fluid>
                <div>
                <h1>確認訂餐</h1>
                     <p>
                    確認您訂購的餐點後，請於下方選擇取餐時間。
                    </p>
                </div>
            </Jumbotron>
        </>
        <span> </span>
        <div>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    選擇取餐時間
  </Dropdown.Toggle>
        
  <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={this.handleSelect}>{timeTEN_AFTER}</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={this.handleSelect}>{timeTWENTY_AFTER}</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={this.handleSelect}>{timeTHIRTY_AFTER}</Dropdown.Item>
        <Dropdown.Item href="#/action-4" onClick={this.handleSelect}>{timeFOURTY_AFTER}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <span> {' '} </span>
        <h2>訂餐品項</h2>
        </div>
            <div>
            { products.map((product: any) => (
                      <Product product={product}/>
                  )
                )}
        </div>
        <div>
        <span> </span>
        <Link to ="/order">
          <Button variant="primary">修改訂購餐點</Button>{' '}
        </Link>
        <Link to ="/alert">
          <Button variant="primary">確認訂購</Button>{' '}
        </Link>
          </div>
      </div>
        );
    }
}

export default Student_order_identification;