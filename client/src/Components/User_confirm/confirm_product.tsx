import {Card, Button, Accordion} from 'react-bootstrap'
import React, {useState} from 'react'

const Product = (props: { product: any }) => {
    const { product } = props
    const { title, price, quantity, special_needs} = product
  
    return (
        <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
    <Card.Body>
        單價: {price}  數量: {quantity}
        <div>
            <input onChange={special_needs} placeholder="特殊需求..."/>
        </div>
    </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
    )
  }
  export default Product