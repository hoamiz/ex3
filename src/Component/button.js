import React from 'react'

export const Button = (props) => {
    let value = props.type.toUpperCase()
    console.log(value)
    return (
        <div>
            <button
                className={props.type}
            >
                {value}
            </button>
        </div>
    )
}