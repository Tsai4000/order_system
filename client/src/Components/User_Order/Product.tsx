import {Card, Button} from 'react-bootstrap'
import React, {useState} from 'react'

const Product = (props: { product: any }) => {
    const { product } = props
    const { title, imagePath, price, quantity} = product

    const [productNum, setProductNum] = useState(quantity)
    const addonemore = () => {
      setProductNum(productNum+1)
    }
    const deleteall = () => {
      if (productNum>0){
        setProductNum(productNum-1)
      }
      else{
        setProductNum(0)
      }

      
    }
  
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            售價:{price}
          </Card.Text>
          <Button variant="primary" onClick={addonemore} >選購</Button>
          <Button variant="danger" onClick={deleteall}>取消</Button>
    <Button variant="outline-warning" >數量 {productNum}</Button>
        </Card.Body>
        </Card>
    )
  }
  export default Product