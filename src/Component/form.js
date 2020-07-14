import React from 'react'
import { Input } from './input';
import { Button } from './button';

export const Form = (props) => {
    switch (props.model) {
        case 'login': {
            return (
                <div className="Form">
                    <Input type='username' />
                    <Input type='password' />
                    <Button type='login' />
                    <p className='tip'>Not registered? <a href=''>Create an account</a></p>
                </div>
            )
        }
    }

}