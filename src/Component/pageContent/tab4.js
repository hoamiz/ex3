import React from "react";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import BurgerContainer from './../../burger/burgerContainer';


const { Content } = Layout;

const Tab4 = () => {
    return (
        <Content
            className="site-layout-background"
            style={{
                marginTop: 64,
                padding: 24,
                minHeight: 280
            }}>
            <BurgerContainer />
        </Content>

    )
}

export default Tab4