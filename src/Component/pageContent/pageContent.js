import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderBar from './header';

import { Sidebar } from './sidebar';
import { MainContent } from "./mainContent";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";



export class PageContent extends React.Component {
    render() {
        const { login, personIsLogin } = this.props
        return (
            <Layout>
                {!login ? <Redirect to="/" /> : null}
                <Sidebar />
                <Layout className="site-layout">
                    <HeaderBar personIsLogin={personIsLogin} />
                    <MainContent />
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = state => ({
    login: state.login,
    personIsLogin: state.personIsLogin


})
export default connect(mapStateToProps, null)(PageContent)