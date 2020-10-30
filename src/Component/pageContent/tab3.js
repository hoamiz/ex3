import React from "react";
import NewFeedContainer from './../NewFeed/NewFeedContainer';
import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Content } = Layout;

const Tab3 = (props) => {
    return (
        <Content
            className="site-layout-background"
            style={{
                marginTop: 64,
                padding: 24,
                minHeight: 280
            }}>
            <NewFeedContainer />
        </Content>

    )
}

export default Tab3