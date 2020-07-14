import React from 'react'
import { Input } from './input';
import Button from './button';
import { onRegister } from '../redux/action';
import { connect } from 'react-redux';
const iniState = {
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
    validate = (input) => {
        const usernameRegex = /^[a-z0-9_-]{3,16}$/
        //username : gom chu thuong va so  dai tu 3 - 16 tu
        const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        //password : dai tren 8 , gom chu hoa, thuong , so
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneRegex = /^[0-9_-]{10}$/

        let statusCopy = Object.assign({}, this.state);
        { input.username && (statusCopy.username.valid = usernameRegex.test(input.username.value)) };
        { input.password && (statusCopy.password.valid = passwordRegex.test(input.password.value)) };
        { input.email && (statusCopy.email.valid = emailRegex.test(input.email.value)) };
        { input.phone && (statusCopy.phone.valid = phoneRegex.test(input.phone.value)) };
        console.log(statusCopy.email.valid = emailRegex.test(input.email.value))
        this.setState(statusCopy);
    }
    handdleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        this.validate(this.state)
        if (this.state.model === 'register' && this.state.username.valid && this.state.password.valid && this.state.email.valid && this.state.phone.valid) {
            this.props.onRegister({
                name: this.state.username.value,
                password: this.state.password.value,
                email: this.state.email.value,
                phone: this.state.phone.value,
            })
            this.setState(iniState)
        }
        else this.setState({
            validated: false
        })
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
        switch (this.state.model) {
            case 'login': {
                return (
                    <form className="Form" onSubmit={this.handdleSubmit} >
                        <Input type='text' name='username' value={this.state.username.value} onChange={this.onChange} />
                        {!this.state.username.valid && !this.state.validated && <div>username is invalid</div>}
                        <Input type='password' name='password' value={this.state.password.value} onChange={this.onChange} />
                        {!this.state.password.valid && !this.state.validated && <div>password is invalid</div>}
                        <Button type='submit' name='login' />
                        <div className='tip'>Not registered? <div className='link' onClick={this.onRegister} >Create an account</div></div>
                    </form>
                )
            }
            case 'register': {
                return (
                    <form className="Form" onSubmit={this.handdleSubmit} >
                        <Input type='text' name='username' value={this.state.username.value} onChange={this.onChange} />
                        {!this.state.username.valid && !this.state.validated && <div>username is invalid</div>}
                        <Input type='password' name='password' value={this.state.password.value} onChange={this.onChange} />
                        {!this.state.password.valid && !this.state.validated && <div>password is invalid</div>}
                        <Input type='email' name='email' value={this.state.email.value} onChange={this.onChange} />
                        {!this.state.email.valid && !this.state.validated && <div>email is invalid</div>}
                        <Input type='phone' name='phone' value={this.state.phone.value} onChange={this.onChange} />
                        {!this.state.phone.valid && !this.state.validated && <div>phone number is invalid</div>}
                        <Button type='submit' name='register' />
                    </form>
                )
            }
        }
    }
}

const mapDispatchToProps = dispatch => ({
    onRegister: (profile) => dispatch(onRegister(profile)),
})

export default connect(null, mapDispatchToProps)(Form)