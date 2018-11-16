import React ,{Component} from 'react'
import {Navbar,NavItem,Nav,NavbarToggler,button} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import {Fa} from 'mdbreact';
import './customNavbar.css';

export default class customNavbar extends React.Component{
    render(){
        return(
            
            <Navbar default collapseOnSelect>
               <Navbar.Header>
               <button className="navbar-toggler" type="button" data-toggle ="collapse" data-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" 
         aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <Navbar.Toggle/>
              </Navbar.Header>
             
         
                   <Navbar.Collapse>
                   
                      <Nav pullLeft>
                      
                          <NavItem eventKey={1} ComponentClass={Link} href="/" to="/">
                                shop Men
                         </NavItem>
                          <NavItem eventKey={2} ComponentClass={Link} to="/">
                                shop Women
                          </NavItem>
                         
                        </Nav>
                        <Nav pullRight>
                        <NavItem>
                        <Col md="6">
                        <form className="form-inline mt-4 mb-4">
                          <Fa icon="search" />
                          <input
                            className="form-control form-control-sm ml-3 w-75"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </form>
                      </Col>
                        </NavItem>
                        </Nav>
                      
                        
                        
                    </Navbar.Collapse>
            </Navbar>
            
        
        )
    }
}