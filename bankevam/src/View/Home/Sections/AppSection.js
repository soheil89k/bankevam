import React from "react"
import "./AppSection.scss";
import bazaar_badge from "../../../asset/img/icons/bazaar-badge.png";
import google_play_badge from "../../../asset/img/icons/google-play-badge.png";
import SibApp_badge_fa from "../../../asset/img/icons/SibApp-badge-fa.png";
import sibche_badge from "../../../asset/img/icons/sibche-badge-fa-300x124.png";
import App_image_1 from "../../../asset/img/app-info-android-device-img.png";
import App_image_2 from "../../../asset/img/app-info-iphone-img.png";
import {
    AutoComplete,
    Button,
    Icon,
    Input,

} from "antd"

class HomePageAppSection extends React.Component {

    render() {
        return (
            <div class="home-page-app-section">
               <div class="container">
                  <div className="holder">
                      <div class="details">
                          <h2>
                              کیلید خود را همیشه همراه داشته باشید
                          </h2>
                          <p>
                              دریافت اپلیکیشن کیلید
                          </p>
                        <div class="links-groups">
                            <a>
                                <img src={bazaar_badge} alt=""/>
                            </a>
                            <a>
                                <img src={google_play_badge} alt=""/>
                            </a>
                            <a>
                                <img src={SibApp_badge_fa} alt=""/>
                            </a>
                            <a>
                                <img src={sibche_badge} alt=""/>
                            </a>
                        </div>
                      </div>
                      <div class="app-images-box">
                          <img class="image1" src={App_image_1} alt=""/>
                          <img class="image2" src={App_image_2} alt=""/>
                      </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default HomePageAppSection;