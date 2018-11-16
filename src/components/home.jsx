import React ,{Component} from 'react';
import{Link} from 'react-router-dom';
import {Grid,Row,Col,Image, Jumbotron, Button} from 'react-bootstrap';
import './home.css';

export default class home extends Component{
    render(){
        return(
            <Grid className="background">
            


            <a href="#" class="next round">›</a>
<a href="#" class="previous round">‹</a>

          
              <Row className="show-grid text-center">
              <Col xs={12} sm={3} className="image-wrapper">
              <h1>Quality</h1>
              </Col>
              
              <Col xs={12} sm={3} className="header">
              
              <h3>option 01</h3>
              </Col>
              <Col xs={12} sm={4} className="paragraph">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
              </Col>
              
              </Row>
              <Row className="show grid text-bottom">
              <Col xs={12} sm={4} >
              <h3>Volume 001</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </Col>
              <Col xs={12} sm={4} >
              <h3>Issue 003</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's   </p>
              </Col>
              </Row>

              
            </Grid>

        )
    }
}