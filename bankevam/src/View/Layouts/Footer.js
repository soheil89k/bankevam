import React from "react";
import "./Footer.scss";
import brand_logo from "../../asset/img/brand/logo.png";
import eanjoman_logo from "../../asset/img/icons/eanjoman.jpg";
import ecunion_logo from "../../asset/img/icons/ecunion-logo.png";
import enamad_logo from "../../asset/img/icons/logo.png";
import enamad2_logo from "../../asset/img/icons/logo (1).png";

class Footer extends React.Component {


    render() {

        return (
            <div className="footer-component">
                <div className="social-network-btns">

                    <a href="">
                        <i class="fab fa-telegram-plane"></i>
                    </a>

                    <a href="">
                        <i class="fab fa-twitter"></i>
                    </a>

                    <a href="">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                </div>
                <div className="container">
                    <ul class="menu menu-top">
                        <li>
                            <a href="/buy">خرید</a>
                        </li>
                        <li>
                            <a href="/rent">رهن و اجاره</a>
                        </li>

                        <li>
                            <a
                                href="/map?searchId=8fe7480747da4893b6c42b0af80aef17&amp;type=Listing&amp;sort=kilid,DESC&amp;smartSearch=true">
                                جستجو روی نقشه
                            </a>
                        </li>
                        <li>
                            <a href="/smart-real-estate-valuations">
                                قیمت خانه شما
                            </a>
                        </li>
                        <li>
                            <a href="/housing-market-insight">
                                اطلاعات بازار مسکن
                            </a>
                        </li>
                        <li>
                            <a href="/post-real-estate-listings?previewMode=false">
                                سپردن ملک
                            </a>
                        </li>
                        <li>
                            <a href="/real-estate-agencies">
                                آژانس&zwnj;های املاک
                            </a>
                        </li>
                        <li>
                            <a href="/pro">
                                سامانه مشاورین
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="companies-logo">
                    <li>
                        <a>
                            <img src={eanjoman_logo} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={ecunion_logo} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={enamad_logo} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={enamad2_logo} alt=""/>
                        </a>
                    </li>
                </ul>
                <div className="container">
                    <ul class="menu">
                        <li>
                            <a href="">
                                درباره کیلید
                            </a>
                        </li>
                        <li>
                            <a href="">
                                تماس با ما
                            </a>
                        </li>
                        <li>
                            <a href="">
                                بلاگ
                            </a>
                        </li>
                        <li>
                            <a href="">
                                اپلیکیشن موبایل
                            </a>
                        </li>
                        <li>
                            <a href="">
                                نقشه سایت
                            </a>
                        </li>
                    </ul>
                </div>

                <img class="berand-logo-box" src={brand_logo} alt=""/>
                <div className="contact-details-box">
                    <span>
                        تهران، خیابان وزرا، کوچه نهم، پلاک 26
                    </span>
                    <span>
                        021-75071000
                    </span>
                </div>
                <div className="bottom-bar">
                    <span>
                        کلیه حقوق این سایت متعلق به شرکت کلان داده شهر فناوران می‌باشد
                    </span>
                    <a href="" class="white">
                        حریم خصوصی
                    </a>
                    <a href="" class="white">
                        شرایط استفاده
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;