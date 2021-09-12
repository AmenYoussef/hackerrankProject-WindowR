import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import React from "react";
import lapimg from "../img/laptop.jpg";
import {} from "react-router-dom";
function prodact() {
  return (

        <section>
            <Container>
                <div className='titleSec' style={{'text-align': 'center'}}>
                    <h2>Our <span>Product</span></h2>
                    <p style={{'color':'rgb(153, 151, 151)'}}>Best Product And Best Price</p>
                </div>
                <Row>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lapimg} />
                            <Card.Body>
                                <Card.Title>Hp Lap Top <span>1000 L.E</span></Card.Title>
                                <Button variant="primary">Add To Car</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}

export default prodact;
