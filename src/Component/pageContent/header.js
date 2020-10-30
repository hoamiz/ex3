import React from 'react';
import { Layout, Button, Avatar } from 'antd';
import { PoweroffOutlined, UserAddOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { logout, onRegister } from './../../redux/action';
import { randomPerson } from './randomPerson';
const { Header } = Layout;
const HeaderBar = (props) => {
    const checkKey = (newPerson) => {
        props.profiles.map(profile => {
            if (profile.key === newPerson.key) {
                console.log(profile.key, newPerson.key)
                newPerson.key++
                return checkKey(newPerson)
            }
            else return newPerson
        })
    }
    const generatePerson = async () => {
        const newPerson = await randomPerson()
        await checkKey(newPerson)
        props.onRegister(newPerson)
    }
    const avaSrc = "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2019/09/cat.jpg"
    const { logout, personIsLogin } = props
    return (
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} className="headderbar">
            <Button
                id="addPerson"
                type="primary"
                onClick={generatePerson}
                icon={<UserAddOutlined />}>generate person</Button>
            <Avatar size={50} src={avaSrc} />
            <div className='userName' >{personIsLogin.name}</div>
            <Button
                className="logout"
                style={{ height: "100%", fontSize: '1.4rem' }}
                type="primary"
                onClick={logout}
                icon={<PoweroffOutlined />}>Log Out</Button>
        </Header >
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    onRegister: (person) => dispatch(onRegister(person))
})
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)