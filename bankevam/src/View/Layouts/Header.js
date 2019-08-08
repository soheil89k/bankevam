import React from "react";
import "./Header.scss";
import Logo from "../../asset/img/brand/logo.png";
import {Button} from "antd"

class Header extends React.Component {


    render() {

        return (
            <div className="header-component">
                <div className="right-box">
                    <div className="banner-box">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="menu-bar">
                        <ul>
                            <li>
                                <a href="#">test</a>
                            </li>
                            <li>
                                <a href="#">test</a>
                            </li>
                            <li>
                                <a href="#">test</a>
                            </li>
                            <li>
                                <a href="#">test</a>
                            </li>
                            <li>
                                <a href="#">test</a>
                            </li>
                            <li>
                                <a href="#">test</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="left-box">
                    <div className="profile-box">
                        <ul>
                            <li>
                                <a href="">
                                    ورود یا ثبت نام
                                </a>
                            </li>
                            <li className="full">
                                <Button type="primary">
                                    ثبت رایگان آگهی
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;