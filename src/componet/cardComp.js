import {Container, Row, Col, Table} from 'react-bootstrap';
import React from "react";
import {} from "react-router-dom";

function CardComp() {
      
  return (

        <section>
            <Container>
                <Row>
                    <Col md={12}>
                    <Table  hover>
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
                    <Col md={4}>
                    <Table  hover>
                    <tbody>
                        <tr>
                        <td>Fees : </td>
                        <td>5 L.e</td>
                        </tr>
                        
                        <tr>
                        <td>Total</td>
                        <td>1000 L.e</td>
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
