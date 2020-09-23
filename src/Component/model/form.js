import React from 'react'
import { onRegister, login } from '../../redux/action';
import { connect } from 'react-redux';
import { FormLogin } from './FormLogin';
import { FormRegister } from './FormRegister';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";


export const validate = (input) => {
    const usernameRegex = /^[a-z0-9_-]{3,16}$/
    //username : gom chu thuong va so  dai tu 3 - 16 tu
    const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    //password : dai tren 8 , gom chu hoa, thuong , so
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^[0-9_-]{10}$/

    let statusCopy = Object.assign({}, input);
    input.username && (statusCopy.username.valid = usernameRegex.test(input.username.value));
    input.password && (statusCopy.password.valid = passwordRegex.test(input.password.value));
    input.email && (statusCopy.email.valid = emailRegex.test(input.email.value));
    input.phone && (statusCopy.phone.valid = phoneRegex.test(input.phone.value));
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
            model: 'login',
            wrongPass: false,
            wrongUser: false,
        }
    }

    handdleSubmit = (e) => {
        e.preventDefault();
        let statusCopy = validate(this.state)
        this.setState(statusCopy);
        if (this.state.model === 'register' && this.state.username.valid && this.state.password.valid && this.state.email.valid && this.state.phone.valid) {
            this.props.onRegister({
                key: `${Math.floor(1 + Math.random() * 999999)}`,
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
            let profile = this.props.profiles.find(x => x.name === this.state.username.value)
            if (!profile) this.setState({
                wrongUser: true
            })
            else this.setState({
                wrongUser: false
            })
            if (profile && profile.password === this.state.password.value) this.props.login(profile)
            else this.setState({
                wrongPass: true
            })
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

        const { isLogin } = this.props
        return (
            <div>
                {this.state.model === 'login' ? <Redirect to="/" /> : <Redirect to="/register" />}
                <Switch>
                    <Route exact path="/">
                        <FormLogin
                            activeOnlyWhenExact={true}
                            label="login"
                            onSubmit={this.handdleSubmit}
                            onRegister={this.onRegister}
                            onChange={this.onChange}
                            props={this.state}
                            isLogin={isLogin}
                        />
                    </Route>
                    <Route exact path="/register">
                        <FormRegister
                            activeOnlyWhenExact={true}
                            label="register"
                            onSubmit={this.handdleSubmit}
                            onChange={this.onChange}
                            props={this.state} />
                    </Route>
                </Switch>

            </div>
        )


    }
}

const mapDispatchToProps = dispatch => ({
    onRegister: (profile) => dispatch(onRegister(profile)),
    login: (profile) => dispatch(login(profile)),
})

export default withRouter(connect(null, mapDispatchToProps)(Form))