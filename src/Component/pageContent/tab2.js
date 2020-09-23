import React from "react";
import { Table, Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import { deleteProfile, editProfile } from '../../redux/action'
import { connect } from 'react-redux';
import MiniGameContainer from './../MiniGame/MiniGameContainer';


const { Content } = Layout;
const { Column } = Table;


const Tab2 = (props) => {
    const { profiles } = props
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
const mapDispatchToProps = dispatch => ({
    deleteProfile: (key) => dispatch(deleteProfile(key)),
    editProfile: (person) => dispatch(editProfile(person))
})
const mapStateToProps = state => ({
    profiles: state.profiles
})
export default connect(mapStateToProps, mapDispatchToProps)(Tab2)
