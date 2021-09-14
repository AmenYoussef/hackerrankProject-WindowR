import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderInfo from './componet/headerComp';
import Prodact from './componet/prodact';
import CardComp from './componet/cardComp';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(

  
  
  <React.StrictMode>
    <BrowserRouter>
     <Navbar bg="light" expand="lg" >
        <Container>
        <Navbar.Brand href="#">Windows R</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{'flex-grow': 'revert'}}>
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', float:'right' }}
            navbarScroll
            >              
            
              <Route>
                <Nav.Link><Link exact to="/">Home</Link></Nav.Link>
                <Nav.Link><Link exact to="/CardComp">Cart</Link></Nav.Link>
              </Route>
            

            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
    <Switch>
            <Route exact path="/CardComp">
            <CardComp />
            </Route>
            <Route exact path="/">
            <HeaderInfo />
            <Prodact />
            </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
