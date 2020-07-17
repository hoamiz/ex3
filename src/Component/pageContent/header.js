import React from 'react';
import { Layout, Button, Avatar } from 'antd';
import { PoweroffOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, onRegister } from './../../redux/action';
import { bindActionCreators } from 'redux';
import { randomPerson } from './randomPerson';
const { Header } = Layout;
class HeaderBar extends React.Component {

    generatePerson = () => {
        const newPerson = randomPerson()
        this.props.onRegister(newPerson)

    }
    render() {
        const avaSrc = "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2019/09/cat.jpg"
        const { logout, personIsLogin } = this.props
        return (
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} className="headderbar">
                <Button
                    id="addPerson"
                    type="primary"
                    onClick={this.generatePerson}
                    icon={<UserAddOutlined />}>generate person</Button>
                <Avatar size={50} src={avaSrc} />
                <div className='userName'>{personIsLogin.name}</div>
                <Button
                    className="logout"
                    style={{  height: "100%",fontSize:'1.4rem'}}
                    type="primary"
                    onClick={logout}
                    icon={<PoweroffOutlined />}>Log Out</Button>
            </Header >
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    onRegister: (person) => dispatch(onRegister(person))
})
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)