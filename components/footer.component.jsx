import React from 'react';
import { Container, Row } from 'react-bootstrap';


class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <footer className='d-xl-none'>
            <Container>
                <Row>
                    <div className="login-button col">
                        <p>Log in</p>
                    </div>
                    <div className="sign-up col">
                        <p>Sign Up</p>
                    </div>
                </Row>
            </Container>
        </footer>
    }
}

export default Footer;