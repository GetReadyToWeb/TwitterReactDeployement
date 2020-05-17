import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
class NewsCatogary extends Component {
    constructor(){
        super();
    }

    render(){
        return <Row className="catogary">
            <div className="wrapper col col-xl-8">
                <ul className="nav nav-tabs d-flex justify-content-around" id="myTab">
                    <li className="active">For You</li>
                    <li>Covid 19</li>
                    <li>Trending</li>
                    <li>News</li>
                    <li>Sports</li>
                    <li>Fun</li>
                    <li>Entertainment</li>
                </ul> 
            </div>
        </Row>
    }
}

export default NewsCatogary