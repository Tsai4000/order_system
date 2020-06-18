import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron, Button, Container, Accordion, Dropdown} from 'react-bootstrap'
import products from '../User_Order/product.json';
import Product from './order'
import {Link} from 'react-router-dom';

interface IProps {
}

interface IState {
    total_price?: Number;
    special_needs?: String;
    select_ti?: Number;
    price?: Number;
}

export class Admin_todo extends React.Component<IProps,IState> {
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
                <h1>確認出餐</h1>
                     <p>
                    確認已完成的訂點後，請於下方勾選已完成。
                    </p>
                </div>
            </Jumbotron>
        </>
        <span> </span>
        <div>
        <Button variant="primary">現在時間: {timeNow}</Button>
        <span> {' '} </span>
        <h2>訂單</h2>
        </div>
            <div>
            { products.map((product: any) => (
                      <Product product={product}/>
                  )
                )}
        </div>
        <div>
        <span> </span>
        <Link to ="/admin">
          <Button variant="primary">查詢已完成訂單</Button>{' '}
        </Link>
        <Link to ="/admin">
          <Button variant="primary">更改供餐菜色</Button>{' '}
        </Link>
          </div>
      </div>
        );
    }
}

export default Admin_todo;