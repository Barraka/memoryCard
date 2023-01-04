import React from 'react'
import Backdrop from './Backdrop';

function Final(props) {

    if(!props.isfinal)return(<div></div>);
    return (
        <div className='final'>
            <Backdrop />
            <div>Final result:</div>
            <div>You made it to round {props.round} of {props.rounds}</div>
            <div>with a score of: {props.score}</div>
            <button onClick={props.playagain} className='playagain'>Play again</button>
        </div>
    )
}

export default Final