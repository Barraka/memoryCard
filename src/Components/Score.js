import React from 'react'

function Score(props) {

    const best=localStorage.getItem('best');
    return (
        <div className='score'>
            <span>Level: {props.round+1} / {props.rounds}</span>
            <span className='scoretext'>Score: {props.score}</span>
            <span>Best: {best}</span>
        </div>
    )
}

export default Score