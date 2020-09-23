import React, { useState } from 'react';

const Answer = (props) => {
    let t = props.score.t
    let f = props.score.f
    const [value, setValue] = useState('')
    const makeQuest = (e) => {
        if (value == '') return
        e.preventDefault()
        props.makeQuest()
        if (parseInt(value) === props.ans) t++
        else if (parseInt(value) !== props.ans) f++
        props.setScore({ t, f })
        setValue('')
    }
    const onChange = (e) => {
        let newValue = e.target.value
        setValue(newValue)
    }
    console.log(props.ans)
    return (
        <div>
            <form onSubmit={makeQuest}
            >
                <input
                    type='number'
                    step='1'
                    autoFocus
                    value={value}
                    onChange={onChange}
                    min={0}
                />
                <input type='submit' value="Submit" disabled={value == ''} />
            </form>
        </div >
    )
}
export default Answer