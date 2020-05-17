import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
class ExplorerHeading extends Component {
    constructor(){
        super();
    }

    render(){
        return <div className="explore-row col col-xl-8 d-flex justify-content-between align-items-center">
            <div className="explore">Explore</div>
            <div className="cog">
                <div>
                    <img src="img/cog.png" />
                </div>
            </div>
        </div>
    }
}

export default ExplorerHeading