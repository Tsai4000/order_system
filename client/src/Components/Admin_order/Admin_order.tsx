import React,{Component} from 'react';
import {Form, Button, Jumbotron} from 'react-bootstrap'
import histroy from '../../store/history'
class AdminOrder extends Component{
  constructor(props:any) {
    super(props);
    this.state = {
      today_products: [],
    };
  }
  
  render(){
      const product_list=['炭烤雞排飯','厲威槿套餐','雞排飯','哭阿']
    // const [{status, response: products}, makeRequest, dispatch] = FetchAllProducts()
    // useEffect( () => {
    //   makeRequest()
    // },[])

    // function goToAdminPage(){
    //   histroy.push('/')
    // }

    return (
        // <Button variant="primary"  onClick={goToAdminPage} >選購</Button>
        <div>
        <Jumbotron>
          <h1>嵐媽訂餐系統管理介面</h1>
        <p>
          請在下列選擇今日出餐之餐點，完成後點選下列按鈕進行確認和進入接單畫面
        </p>
        <p>
          <Button variant="primary">確認今日出餐</Button>
          {/*use to link get order page */}
        </p>
        </Jumbotron>
        <Form>
        {product_list.map((type) => (
          <div key={`joke`} className="mb-3">
            <Form.Check 
              id={type}
              label={type}
            />
          </div>
        ))}
      </Form>
       </div>
    );
}
}
export default AdminOrder;