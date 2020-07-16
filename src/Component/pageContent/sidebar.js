import React from 'react';
import 'antd/dist/antd.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
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
            <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">
                <Header className="menuIcon" style={{ padding: 0 }} onClick={this.toggle}>
                    {React.createElement(
                        this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            id: "icon"

                        }
                    )}
                </Header>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item className="sidebarItem" key="1" icon={<UserOutlined />}>
                        nav 1
            </Menu.Item>
                    <Menu.Item className="sidebarItem" key="2" icon={<VideoCameraOutlined />}>
                        nav 2
            </Menu.Item>
                    <Menu.Item className="sidebarItem" key="3" icon={<UploadOutlined />}>
                        nav 3
            </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}