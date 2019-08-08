import React from "react";
import Header from "../Layouts/Header";
import MasterBanner from "./Sections/MasterBanner";
import {
    Button,
} from "antd"
import HomePageSection2 from "./Sections/Section2";
import HomePageAppSection from "./Sections/AppSection";
import HomePageSection3 from "./Sections/Section3";
import AboutSection from "./Sections/AboutSection";
import Footer from "../Layouts/Footer";

class Home extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <MasterBanner/>
                <HomePageSection2/>
                <HomePageAppSection/>
                <HomePageSection3/>
                <AboutSection/>
                <Footer/>
            </>
        )
    }
}

export default Home;