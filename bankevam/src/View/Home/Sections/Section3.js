import React from "react"
import "./Section3.scss";
import Image_01 from "../../../asset/img/banners/thombnails-01.jpg";
import {
    AutoComplete,
    Button,
    Icon,
    Input,

} from "antd"

class HomePageSection3 extends React.Component {

    render() {
        return (
            <div class="home-page-section-3">
                <div class="container">
                    <h2>
                        مجله کیلید را بخوانید
                    </h2>
                    <p>
                        کارشناسان کیلید، در مجله "کیلید" شما را با مهم ترین مسائل بازار مسکن آشنا می کنند. این مجله،
                        مبتنی بر بررسی های علمی و آماری، اخبار و تحلیل های آینده بازار مسکن را در اختیارتان قرار می دهد.
                    </p>
                    <div class="item-holder">
                        <div className="item">
                            <img src={Image_01} alt=""/>
                            <label htmlFor="">
                                ایده‌هایی برای دکوراسیون فضای اداری و افزایش
                            </label>
                        </div>
                        <div className="item">
                            <img src={Image_01} alt=""/>
                            <label htmlFor="">
                                ایده‌هایی برای دکوراسیون فضای اداری و افزایش
                            </label>
                        </div>
                        <div className="item">
                            <img src={Image_01} alt=""/>
                            <label htmlFor="">
                                ایده‌هایی برای دکوراسیون فضای اداری و افزایش
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageSection3;