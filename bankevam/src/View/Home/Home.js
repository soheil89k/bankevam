import React from "react";
import Header from "../Layouts/Header";
import MasterBanner from "./Sections/MasterBanner";
import {
    Button,
} from "antd"
import HomePageSection2 from "./Sections/Section2";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MasterBanner/>
                <HomePageSection2/>
            </div>
        )
    }
}

export default Home;