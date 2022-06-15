import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="parallax" fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="top-div text-center">
                            <p className="text-center m-0 top-title">React js</p>
                            <p className="text-center m-0 top-subtitle">Learn With Alamgir Hossain</p>
                            <p className="text-center m-0 top-subtitle">Learn Something Good, & Do Something Better</p>
                            <button className="btn login-btn m-2">Login</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeBanner;
