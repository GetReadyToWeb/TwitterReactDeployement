import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';


class Header extends React.Component {
    constructor(){
        super();
    }

    render(){
        return  <header><Container> 
                    <Row className="align-items-center">
                        <div className="twitter-logo">
                            <img src="img/twitter.svg" />
                        </div>
                        <div className="search-bar mr-auto d-flex align-items-center col col-xl-7">
                                <div className="search-icon">
                                    <img src="img/search.png" />
                                </div>
                                <div className="search-field mr-auto">
                                    <input placeholder="Search Twitter" />
                                </div>
                        </div>
                        <div className="login-button col-1 d-none d-xl-block">
                            <p>Log in</p>
                        </div>
                        <div className="sign-up col-1 d-none d-xl-block">
                            <p>Sign Up</p>
                        </div>
                        <div className="settings">
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </Row>
                </Container></header>;
    }
} 


export default Header;