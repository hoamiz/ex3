import React from 'react';

const ScoreBoard = (props) => {
    return (
        <div>
            <div>Your score is : {props.score.t}/{props.score.f + props.score.t}</div>
            <button onClick={props.resetGame}>Reset</button>
        </div>
    )
}

export default ScoreBoard