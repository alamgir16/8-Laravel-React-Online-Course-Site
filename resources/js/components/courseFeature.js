import React, { Component, Fragment, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from "../../images/cube.svg";
import Axios from "axios";
import LoadingDiv from "./loadingDiv";
import WentWrong from "./wentWrong";

class CourseFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DataList: [],
            isLoading: true,
            isError: false,
        };
    }

    componentDidMount() {
        Axios.get("/getCourseFeature")
            .then((response) => {
                if (response.status == 200) {
                    this.setState({
                        DataList: response.data,
                        isLoading: false,
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        isError: true,
                    });
                }
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    isError: true,
                });
            });
    }

    render() {
        if (this.state.isLoading == true) {
            return <LoadingDiv />;
        } else if (this.state.isError == true) {
            return <WentWrong />;
        } else {
            const mylist = this.state.DataList;
            const myView = mylist.map((mylist) => {
                return (
                    <Col lg={3} md={3} sm={12}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Img className="item-logo" src={image} />
                                <h5 className="title-text mt-2">
                                    <b>REACT BASIC</b>
                                </h5>
                                <p className="des-text">
                                    Free Videos Cover All Of Basic About React
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            });
            return (
                <Fragment>
                    <Container className="Section-margin">
                        <Row>{myView}</Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default CourseFeature;
