
import React from 'react'
import { Input } from './input';
import Button from './button';
import { Link } from 'react-router-dom';


export const FormLogin = (props) => {
    return (
        <form className="Form" onSubmit={props.onSubmit} >
            <Input type='text' name='username' value={props.props.username.value} onChange={props.onChange} />
            {!props.props.username.valid && !props.props.validated && <div>username is invalid</div>}
            <Input type='password' name='password' value={props.props.password.value} onChange={props.onChange} />
            {!props.props.password.valid && !props.props.validated && <div>password is invalid</div>}
            <Button type='submit' name='login' />
            <div className='tip'>Not registered?
            <Link to="/register"><div className='link' onClick={props.onRegister} >Create an account</div></Link>
            </div>
        </form >
    )
}
