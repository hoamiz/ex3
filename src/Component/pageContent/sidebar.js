import React from 'react';
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

const { Header, Sider } = Layout;


export class Sidebar extends React.Component {
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
            <Sider width='250' trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">
                <Header className="menuIcon" style={{ padding: 0 }} onClick={this.toggle}>
                    {React.createElement(
                        this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            id: "icon"

                        }
                    )}
                </Header>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item className="sidebarItem" key="1" icon={<UserOutlined />}>Option 1</Menu.Item>
                    <Menu.Item className="sidebarItem" key="2" icon={<VideoCameraOutlined />}>Option 2</Menu.Item>
                    <Menu.Item className="sidebarItem" key="3" icon={<UploadOutlined />}>Option 3</Menu.Item>
                    <Menu.Item className="sidebarItem" key="4" icon={<RadarChartOutlined />}>Option 4</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}