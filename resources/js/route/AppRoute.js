import React, { Component, Fragment } from "react";
import HomePage from "../pages/HomePage";
import CoursePlan from "../pages/CoursePlan";
import FreeClass from "../pages/FreeClass";
import Registration from "../pages/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route
                            exact
                            path="/coursePlan"
                            element={<CoursePlan />}
                        />
                        <Route
                            exact
                            path="/freeClass"
                            element={<FreeClass />}
                        />
                        <Route
                            exact
                            path="/registration"
                            element={<Registration />}
                        />
                    </Routes>
                </Router>
            </Fragment>
        );
    }
}

export default AppRoute;
