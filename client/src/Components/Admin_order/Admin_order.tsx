import React ,{useState}from 'react';
import {Form, Button, Jumbotron} from 'react-bootstrap'
import histroy from '../../store/history'
import useDishesApi from '../../hooks/Admin_dishes/dishesrequest'
import {Link} from 'react-router-dom';

function AdminOrder() {

  const product_list=['炭烤雞排飯','厲威槿套餐','雞排飯','排骨飯']
  const [today_product, ProductChange] = useState(product_list)
  const [{status, response}, makeRequest] = useDishesApi()
  function handleProductChange(e:any) {
    ProductChange(e.target.value);
  }
  function handleClick() {
        makeRequest()
  }
    return (
        // <Button variant="primary"  onClick={goToAdminPage} >選購</Button>
        <div>
        <Jumbotron>
          <h1>嵐媽訂餐系統管理介面</h1>
        <p>
          請在下列選擇今日出餐之餐點，完成後點選下列按鈕進行確認和進入接單畫面
        </p>
        <p>
        <Link to ="/admintodo">
          <Button variant="primary">確認今日出餐</Button>
        </Link>
        </p>
        </Jumbotron>
        <Form>
        {product_list.map((type) => (
          <div key={`joke`} className="mb-3">
            <Form.Check 
              id={type}
              label={type}
              onClickCapture={handleProductChange}
            />
          </div>
        ))}
      </Form>
       </div>
    );
}
export default AdminOrder;