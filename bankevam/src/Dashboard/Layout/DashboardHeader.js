import React from "react";
import "./DashboardHeader.scss"
import {Layout, Menu, Icon,Breadcrumb} from 'antd';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const {Header, Sider, Content} = Layout;

class DashboardHeader extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout
            style={{
                height:"100%"
            }}>
                <Sider
                    style={{
                        height: "100vh",
                        overflow: "auto"
                    }} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">Home
                                <Icon type="user"/>
                                <span>nav 1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/Users">Home
                                <Icon type="video-camera"/>
                                <span>nav 2</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item><Menu.Item key="1">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>

                    </Menu>
                </Sider>
                <Layout style={{
                    display: "flex",
                }}
                >
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            flex: "1",
                            overflow: "auto"
                        }}
                    >
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                        Content<br/>
                    </Content>
                </Layout>
            </Layout>
        );
    }

}

export default DashboardHeader;