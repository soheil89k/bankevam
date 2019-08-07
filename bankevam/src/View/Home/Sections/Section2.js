import React from "react"
import "./Section2.scss";
import Image_01 from "../../../asset/img/banners/chart.png";
import {
    AutoComplete,
    Button,
    Icon,
    Input,

} from "antd"

class HomePageSection2 extends React.Component {

    render() {
        return (
            <div class="home-page-section-2">
               <div class="container">
                  <div className="holder">
                      <div>
                          <h2>
                              بازار مسکن را ارزیابی کنید
                          </h2>
                          <p>
                              در بازار مسکن، داشتن اطلاعات و داده های دقیق «طلایی ترین فرصتها» را برای خریداران و سرمایه گذاران فراهم می کند. در کیلید این داده ها و اطلاعات پردازش شده و نتیجه پردازش در اختیار مشترکان کیلید قرار می گیرد. با تحلیل گذشته و رصد کردن امروز بازار مسکن، خانه آینده را بسازید.
                          </p>
                          <Button>
                              اطلاعات بازار مسکن
                          </Button>
                      </div>
                      <div>
                          <img src={Image_01} alt=""/>
                      </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default HomePageSection2;