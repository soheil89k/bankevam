import React from "react"
import "./MasterBanner.scss";
import {
    AutoComplete,
    Button,
    Icon,
    Input,

} from "antd"

class MasterBanner extends React.Component {

    render() {
        return (
            <div className="master-banner-component">
                <div>
                    <h1 className="banner-title">
                        پایگاه بی واسطه آگهی های
                    </h1>
                    <p className="banner-description">
                        فروش وام ، ارائه ضمانت و سرمایه گذار
                    </p>
                    <div className="tab-controller">
                        <Button className="active">button1</Button>
                        <Button>button1</Button>
                        <Button>button1</Button>
                    </div>
                    <div className="search-box">
                        <div className="input-box">
                            <AutoComplete
                                className="county-selector"
                                dropdownClassName="certain-category-search-dropdown"
                                dropdownMatchSelectWidth={false}
                                dropdownStyle={{ width: 300 }}
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="input here"
                                optionLabelProp="value">
                                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                            </AutoComplete>
                            <Input type="text"/>
                        </div>
                        <div className="button-box">
                            <Button>button1</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MasterBanner;