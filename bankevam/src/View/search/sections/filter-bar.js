import React from "react";
import "./filter-bar.scss"
import {
    Slider,
    AutoComplete,
    Input,
    Icon,
    Button
} from "antd"

class FilterBar extends React.Component {

    render() {

        return (
            <div class="filter-bar-component">
                <div class="fixed-box">
                    <div className="container">
                        <div className="holder">
                            <div className="right-box">
                                <AutoComplete
                                    className="county-selector"
                                    dropdownClassName="certain-category-search-dropdown"
                                    dropdownMatchSelectWidth={false}
                                    dropdownStyle={{width: 300}}
                                    size="large"
                                    style={{width: '100%'}}
                                    placeholder="input here"
                                    optionLabelProp="value">
                                    <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
                                </AutoComplete>
                                <AutoComplete
                                    className="county-selector"
                                    dropdownClassName="certain-category-search-dropdown"
                                    dropdownMatchSelectWidth={false}
                                    dropdownStyle={{width: 300}}
                                    size="large"
                                    style={{width: '100%'}}
                                    placeholder="input here"
                                    optionLabelProp="value">
                                    <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
                                </AutoComplete>
                                <Slider
                                    min={1}
                                    max={20}
                                    /*onChange={this.onChange}*/
                                    value={15}
                                />
                            </div>
                            <div className="left-box">
                                <Button>ذخیره</Button>
                                <Button>جستجو</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-box">
                    <div className="container">
                        <div className="holder">
                            <div className="right-box"></div>
                            <div className="left-box">

                                    <div>
                                        فیلتر
                                        <span>
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        نتایج
                                        <span>
                                            ۷۰۴۲۵
                                        </span>
                                        مورد
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FilterBar;