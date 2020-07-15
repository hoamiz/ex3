import React from 'react'
import { onRegister } from '../redux/action';
import { connect } from 'react-redux';
import { FormLogin } from './FormLogin';
import { FormRegister } from './FormRegister';
import { Route, Link } from 'react-router-dom';


export const validate = (input) => {
    const usernameRegex = /^[a-z0-9_-]{3,16}$/
    //username : gom chu thuong va so  dai tu 3 - 16 tu
    const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    //password : dai tren 8 , gom chu hoa, thuong , so
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^[0-9_-]{10}$/

    let statusCopy = Object.assign({}, input);
    { input.username && (statusCopy.username.valid = usernameRegex.test(input.username.value)) };
    { input.password && (statusCopy.password.valid = passwordRegex.test(input.password.value)) };
    { input.email && (statusCopy.email.valid = emailRegex.test(input.email.value)) };
    { input.phone && (statusCopy.phone.valid = phoneRegex.test(input.phone.value)) };
    return statusCopy;

}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: {
                value: '',
                valid: false,
            },
            password: {
                value: '',
                valid: false,
            },
            email: {
                value: '',
                valid: false,
            },
            phone: {
                value: '',
                valid: false,
            },
            validated: true,
            model: 'login'
        }
    }

    handdleSubmit = (e) => {
        e.preventDefault();
        let statusCopy = validate(this.state)
        this.setState(statusCopy);
        if (this.state.model === 'register' && this.state.username.valid && this.state.password.valid && this.state.email.valid && this.state.phone.valid) {
            this.props.onRegister({
                name: this.state.username.value,
                password: this.state.password.value,
                email: this.state.email.value,
                phone: this.state.phone.value,
            })
            this.setState({
                username: {
                    value: '',
                    valid: false,
                },
                password: {
                    value: '',
                    valid: false,
                },
                email: {
                    value: '',
                    valid: false,
                },
                phone: {
                    value: '',
                    valid: false,
                },
                validated: true,
                model: 'login'

            })

        }
        else this.setState({
            validated: false
        })
        if (this.state.model === 'login') {

        }
    }

    onChange = (e) => {
        let inputValue = e.target.value;
        let statusCopy = Object.assign({}, this.state);
        statusCopy[e.target.name].value = inputValue;
        this.setState(statusCopy);
    }

    onRegister = () => {
        this.setState({
            model: 'register'
        })
    }

    render() {

        const { profiles } = this.props
        console.log(profiles)
        switch (this.state.model) {
            case 'login': {
                return (
                    <Route path="/">
                        <FormLogin
                            to="/login"
                            activeOnlyWhenExact={true}
                            label="login"
                            onSubmit={this.handdleSubmit}
                            onRegister={this.onRegister}
                            onChange={this.onChange}
                            props={this.state} />
                    </Route>
                )
            }
            case 'register': {
                return (
                    <Route path="/register">
                        <FormRegister
                            to="/register"
                            activeOnlyWhenExact={true}
                            label="register"
                            onSubmit={this.handdleSubmit}
                            onChange={this.onChange}
                            props={this.state} />
                    </Route>

                )
            }
        }
    }
}

const mapDispatchToProps = dispatch => ({
    onRegister: (profile) => dispatch(onRegister(profile)),
})

export default connect(null, mapDispatchToProps)(Form)