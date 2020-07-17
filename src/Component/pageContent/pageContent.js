import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderBar from './header';

import { Sidebar } from './sidebar';
import MainContent from "./mainContent";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";



export class PageContent extends React.Component {
    render() {
        const { login, personIsLogin, profiles } = this.props
        return (
            <Layout>
                {!login ? <Redirect to="/" /> : null}
                <Sidebar />
                <Layout className="site-layout">
                    <HeaderBar personIsLogin={personIsLogin} />
                    <MainContent profiles={profiles.filter(profile => profile.key !== personIsLogin.key)} />
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = state => ({
    login: state.login,
    personIsLogin: state.personIsLogin,
    profiles: state.profiles,



})
export default connect(mapStateToProps, null)(PageContent)