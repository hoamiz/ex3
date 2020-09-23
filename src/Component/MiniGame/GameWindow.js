import React, { useState, useEffect } from 'react';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';

const GameWindow = (props) => {
    const { setScore, score, x, y, makeQuest } = props
    return (
        <div>
            <Question
                setScore={setScore}
                score={score}
                x={x} y={y}
                makeQuest={makeQuest}
            />
            <Answer
                ans={x + y}
                setScore={setScore}
                makeQuest={makeQuest}
                score={score}
            />

            <Score score={score} />
        </div>
    )
}

export default GameWindow