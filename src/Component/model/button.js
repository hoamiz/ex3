import React from 'react'

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
export default Button