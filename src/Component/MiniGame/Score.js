import React from 'react';

const Score = (props) => {
    return (
        <div>
            <div>True : {props.score.t}</div>
            <div>False : {props.score.f}</div>
            <div>Score : {props.score.t}/{props.score.f + props.score.t} </div>
        </div>
    )
}
export default Score