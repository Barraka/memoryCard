import React from 'react'
import pl from '../assets/pl.png';

function Title() {

    return (
        <div className='titleWrapper'>
            <div className="imgWrapper"><img src={pl} className="titleImg"></img></div>
            <div className='title'>Premier League <br></br>Memory Game</div>
        </div>
    )
}

export default Title