import React, { useState, useEffect } from 'react';
import GameWindow from './GameWindow';
import ScoreBoard from './ScoreBoard';


const MiniGameContainer = () => {
    const [x, setX] = useState(Math.floor(Math.random() * 1000))
    const [y, setY] = useState(Math.floor(Math.random() * 1000))
    const [score, setScore] = useState({ t: 0, f: 0 })
    const [total, setTotal] = useState(0)
    const makeQuest = () => {
        setX(Math.floor(Math.random() * 1000))
        setY(Math.floor(Math.random() * 1000))
    }
    useEffect(() => {
        setTotal(score.t + score.f)
    },[score]);
    const resetGame = () => {
        setTotal(0)
        setScore({ t: 0, f: 0 })

    }
    return (
        total >= 20
            ? <ScoreBoard
                score={score}
                resetGame={resetGame}
            />
            : <GameWindow
                x={x}
                y={y}
                makeQuest={makeQuest}
                score={score}
                setScore={setScore}
            />
    )
}

export default MiniGameContainer