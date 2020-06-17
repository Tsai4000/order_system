import React,{Component} from 'react';
import products from './product.json';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron, Button} from 'react-bootstrap'
class UserOrder extends Component{
  constructor(props:any) {
    super(props);
    this.state = {
      
    };
  }
  render(){
    // const [{status, response: products}, makeRequest, dispatch] = FetchAllProducts()
    // useEffect( () => {
    //   makeRequest()
  
    // },[])
    return (
      <div className="Container">
        <div>
        <Jumbotron>
    <h1>嵐媽訂餐系統</h1>
      <p>
          請在下列選擇想訂購的餐點和份數，完成後點選下列按鈕進行訂餐確認和領餐時間
      </p>
      <p>
    <Button variant="primary">確認訂購</Button>{' '}
      </p>
    </Jumbotron>
        </div>
        { products.map((product: any) => (
                      <Product product={product}/>
                  )
                )}
      </div>
    );
}
}
export default UserOrder;