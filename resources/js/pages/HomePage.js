import React, {Component} from "react";
import Menu from "../components/Menu";
import HomeBanner from "../components/homeBanner";
import CourseFeature from "../components/courseFeature";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
            </div>
        );
    }
}

export default HomePage;
