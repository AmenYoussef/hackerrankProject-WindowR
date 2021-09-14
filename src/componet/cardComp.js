import {Container, Row, Col, Table} from 'react-bootstrap';
import React from "react";
import lapimg from "../img/laptop.jpg";
import {} from "react-router-dom";

function CardComp() {
      
  return (

        <section>
            <Container>
                <Row>
                    <Col md={8}>
                    <Table striped bordered hover text-centar>
                    <thead>
                        <tr>
                        <th>Name Prodact</th>
                        <th>Price</th>
                        <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        <td>100 L.e</td>
                        <td>1</td>
                        </tr>
                        
                        <tr>
                        <td>Mark</td>
                        <td>100 L.e</td>
                        <td>1</td>
                        </tr>
                        
                        <tr>
                        <td>Mark</td>
                        <td>100 L.e</td>
                        <td>1</td>
                        </tr>
                        
                        <tr>
                        <td>Mark</td>
                        <td>100 L.e</td>
                        <td>1</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}

export default CardComp;
