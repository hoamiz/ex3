import React from 'react';
import { Layout, Button, Avatar } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../redux/action';
import { bindActionCreators } from 'redux';
const { Header } = Layout;
class HeaderBar extends React.Component {
    render() {
        const avaSrc = "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2019/09/cat.jpg"
        const { logout, personIsLogin } = this.props
        return (
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} className="headderbar">
                <Avatar size={50} src={avaSrc} />
                <div className='userName'>{personIsLogin.name}</div>
                <Button
                    className="logout"
                    type="primary"
                    onClick={logout}
                    icon={<PoweroffOutlined />}>Log Out</Button>
            </Header >
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)