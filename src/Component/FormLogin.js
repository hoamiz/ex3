
import React from 'react'
import { Input } from './input';
import Button from './button';
import { Link, Redirect } from 'react-router-dom';


export const FormLogin = (props) => {
    let param = "/"
    if (props.isLogin) param = "/index"
    return (
        <form className="Form" onSubmit={props.onSubmit} >
            <Input type='text' name='username' value={props.props.username.value} onChange={props.onChange} />
            {!props.props.username.valid && !props.props.validated && <div>username is invalid</div>}
            {props.props.username.valid && !props.props.validated && props.props.wrongUser && <div className="wronginfo">user is incorrect, please try again!</div>}
            <Input type='password' name='password' value={props.props.password.value} onChange={props.onChange} />
            {!props.props.password.valid && !props.props.validated && <div>password is invalid</div>}
            {props.props.password.valid && !props.props.validated && props.props.wrongPass && <div className="wronginfo">password is incorrect, please try again!</div>}
            <Redirect to={param} />
            <Button type='submit' name='login' />
            <div className='tip'>Not registered?
            <Link to="/register"><div className='link' onClick={props.onRegister} >Create an account</div></Link>
            </div>
        </form >
    )
}
