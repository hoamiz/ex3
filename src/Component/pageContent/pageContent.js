import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderBar from './header';
import Sidebar from './sidebar';
import MainContent from "./mainContent";
import { connect } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import Tab2 from "./tab2";
import Tab3 from './tab3';
import Tab4 from './tab4';


const PageContent = (props) => {
    const { login, personIsLogin, profiles } = props
    return (
        <Layout>
            {!login ? <Redirect to="/" /> : null}
            <Layout className="site-layout">
                <HeaderBar personIsLogin={personIsLogin} />
                <Sidebar />
                <Switch>
                    <Route exact path="/index"><MainContent profiles={profiles.filter(profile => profile.key !== personIsLogin.key)} /></Route>
                    <Route exact path="/tab2"><Tab2 /></Route>
                    <Route exact path="/tab3"><Tab3 /></Route>
                    <Route exact path="/tab4"><Tab4 /></Route>
                </Switch>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = state => ({
    login: state.login,
    personIsLogin: state.personIsLogin,
    profiles: state.profiles,

})
export default connect(mapStateToProps, null)(PageContent)