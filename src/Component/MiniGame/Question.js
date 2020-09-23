import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';

const Question = (props) => {
    const [count, setCount] = useState(10)
    const [t, setT] = useState(props.score.t)
    let f = props.score.f
    useEffect(() => {
        countDown()
    });
    const countDown = () => {
        if (t !== props.score.t) {
            setT(props.score.t)
            setCount(10)
            clearTimeout(setTimeout(
                () => {
                    setCount(count - 1)
                }
                , 1000))
        } else if (count > 0) {
            setTimeout(
                () => {
                    setCount(count - 1)
                }
                , 1000)
            return

        }
        else if (count === 0) {
            f++
            setCount(10)
            props.makeQuest()
            props.setScore({ t, f })
            return
        }
    }
    return (
        <div>
            <div>{props.x}<br /> + <br />{props.y} <br />= ?</div>
            <Progress
                type="dashboard"
                showInfo={true}
                percent={count * 10}
                status={count > 4 ? "active" : "exception"}
                width={110}
                format={() => `  Time : ${count}s  `}
            />
        </div>
    )
}
export default Question