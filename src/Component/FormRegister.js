
import React from 'react'
import { Input } from './input';
import Button from './button';


export const FormRegister = (props) => {
    return (
        <form className="Form" onSubmit={props.onSubmit} >
            <Input type='text' name='username' value={props.props.username.value} onChange={props.onChange} />
            {!props.props.username.valid && !props.props.validated && <div>username is invalid</div>}
            <Input type='password' name='password' value={props.props.password.value} onChange={props.onChange} />
            {!props.props.password.valid && !props.props.validated && <div>password is invalid</div>}
            <Input type='email' name='email' value={props.props.email.value} onChange={props.onChange} />
            {!props.props.email.valid && !props.props.validated && <div>email is invalid</div>}
            <Input type='phone' name='phone' value={props.props.phone.value} onChange={props.onChange} />
            {!props.props.phone.valid && !props.props.validated && <div>phone number is invalid</div>}
            <Button type='submit' name='register' />
        </form>
    )
}