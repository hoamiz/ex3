import React from 'react'

export const Input = (props) => {
    return (
        <div  >
            <input
                className='input'
                name={props.name}
                type={props.name}
                placeholder={'type your ' + props.name + ' here'}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}