import React from "react";
import "./search-list-item.scss"
import SvgIcon from "../svg-icon/SvgIcon";

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        how:"How do you want your egg today?",
        boiledEgg:"Boiled egg",
        softBoiledEgg:"Soft-boiled egg",
        choice:"How to choose the egg"
    },
    it: {
        how:"Come vuoi il tuo uovo oggi?",
        boiledEgg:"Uovo sodo",
        softBoiledEgg:"Uovo alla coque",
        choice:"Come scegliere l'uovo"
    }
});


class SearchListItem extends React.Component {
    render() {
        return (
            <div class="search-list-item-component">
                <div className="holder">
                    <div className="tag-icon">
                        <SvgIcon group="group2" icon="tag"/>
                    </div>
                    <div className="title">
                        واگذاری امتیاز وام رسالت ۳۰میلیونی زاهدان
                    </div>
                    <hr/>
                    <div className="added-time">
                        2 ساعت پیش
                    </div>
                    <div className="details-box">
                        <div>
                            مبلغ وام:
                            <span>
                                30,000,000 تومان
                            </span>
                        </div>
                        <div>
                            درصد سود وام:
                            <span>
                               18%
                            </span>
                        </div>
                        <div>
                            مدت زمان بازپرداخت:
                            <span>
                               36 ماهه
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchListItem;