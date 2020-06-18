import {Card, Button, Accordion, Form} from 'react-bootstrap'
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
        <Form>
            <Form.Group >
              <Form.Check
                label="完成訂單"              
              />
            </Form.Group>
          </Form>
    </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
    )
  }
  export default Product