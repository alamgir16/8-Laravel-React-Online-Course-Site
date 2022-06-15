import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wentWrong from "../../images/wentWrong.webp";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="text-center" lg={3} md={3} sm={12}>
                            <img className="w-50" src={wentWrong} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;
