import React from 'react'

export const Input = (props) => {
    return (
        <div >
            <input
                className={props.type}
                type={props.type}
                placeholder={props.type}
            />
        </div>
    )
}