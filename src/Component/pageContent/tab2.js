import React from "react";
import {  Layout } from 'antd';
import 'antd/dist/antd.css';
import MiniGameContainer from './../MiniGame/MiniGameContainer';


const { Content } = Layout;


const Tab2 = () => {
    return (
        <Content
            className="site-layout-background"
            style={{
                marginTop: 64,
                padding: 24,
                minHeight: 280
            }}>
            <MiniGameContainer />
        </Content>
    )
}

export default Tab2
