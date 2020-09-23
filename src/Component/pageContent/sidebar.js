import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    RadarChartOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { connect } from "react-redux";
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const { Header, Sider } = Layout;


const Sidebar = () => {

    const toggle = () => {
        setCollapsed(!collapsed)
    };
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider width='250' trigger={null} collapsible collapsed={collapsed} className="sidebar">
            <Header className="menuIcon" style={{ padding: 0 }} onClick={toggle}>
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        id: "icon"
                    }
                )}
            </Header>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item className="sidebarItem" key="1" icon={<UserOutlined />}><Link to="/index">Person List</Link></Menu.Item>
                <Menu.Item className="sidebarItem" key="2" icon={<VideoCameraOutlined />}><Link to="/tab2">Tab 2</Link></Menu.Item>
                <Menu.Item className="sidebarItem" key="3" icon={<UploadOutlined />}>Option 3</Menu.Item>
                <Menu.Item className="sidebarItem" key="4" icon={<RadarChartOutlined />}>Option 4</Menu.Item>
            </Menu>
        </Sider >
    )
}

const mapStateToProps = state => ({
    login: state.login,
    personIsLogin: state.personIsLogin,
    profiles: state.profiles,
})
export default connect(mapStateToProps, null)(Sidebar)