import React from 'react'
import { connect } from 'react-redux';

const Button = (props) => {
    let value = props.name.toUpperCase()

    return (
        <div>
            <button
                className="button"
            >
                {value}
            </button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
})
export default Button