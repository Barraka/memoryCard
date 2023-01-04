import React from 'react'
import Backdrop from './Backdrop';

function NextRound(props) {
    let sentence;
    // if(props.round===1)sentence="Yeah well that was easy, it's just a warm-up!";
    if(props.round===0)sentence=(<div><div>Yeah well that was easy, it's just a warm-up!</div><div>On to level 2 😃</div></div>);
    else if(props.round===1)sentence=(<div><div>You seem doing pretty good.</div><div>Let's up the challenge 🏋️‍♂️</div></div>);
    else if(props.round===2)sentence=(<div><div>Ok smarty pants.</div><div>Let's see how you deal with the final level 👹</div></div>);
    if(props.round===props.rounds-1)sentence =(<div><div>Holly Molly. You made it.</div><div>You truly are a memory god 🔱</div></div>);
    if(!props.isnext) return (<div></div>);
    return (
        <div className='nextround'>
            <Backdrop />
            {sentence}
            <button onClick={props.nextround}>OK</button>
        </div>
    )
}

export default NextRound