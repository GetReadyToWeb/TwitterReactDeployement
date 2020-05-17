import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import ExplorerHeading from './explorer.component'
import NewsCatogary from './newscatogary.component'


class News extends Component {
    constructor() {
        super();
    }
    render(){
        return <Container>
            <Row>
                <ExplorerHeading />
            </Row>
            <NewsCatogary />
        </Container>;
    }
}

export default News