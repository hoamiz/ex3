import React from 'react'
import { } from './../redux/action';
import { connect } from 'react-redux';

const Button = (props) => {
    let value = props.name.toUpperCase()
    return (
        <div>
            <button
                className={props.name}
                onClick={props.onSubmit}
            >
                {value}
            </button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
})
export default Button