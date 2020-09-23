import React from "react";
import { Layout, Button } from 'antd';
import { Table, Modal, Space, Input } from 'antd';
import 'antd/dist/antd.css';
import { deleteProfile, editProfile } from '../../redux/action'
import { connect } from 'react-redux';
import { validate } from './../model/form';
import Burger from './../Burger/Burger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
const { Content } = Layout;
const { Column } = Table;


const Tab2 = (props) => {
    const { profiles } = props
    let { slug } = useParams();
    console.log(slug)
    return (
        <Content
            className="site-layout-background"
            style={{
                marginTop: "64px",
                padding: 24,
                minHeight: 280
            }}>

            <Burger />
        </Content>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteProfile: (key) => dispatch(deleteProfile(key)),
    editProfile: (person) => dispatch(editProfile(person))
})
const mapStateToProps = state => ({
    profiles: state.profiles
})
export default connect(mapStateToProps, mapDispatchToProps)(Tab2)
