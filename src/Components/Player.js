import React from 'react'

function Player(props) {
    const start=props.info;
    const step1=start.split('.');
    const step2=step1[0].split('/');
    const final=step2[step2.length-1];

    function addanimation(e) {
        e.currentTarget.classList.add('animate');
        e.currentTarget.firstElementChild.classList.add('scale');
        setTimeout(function() {
            e.target.parentElement.classList.remove('animate');
            e.target.classList.remove('scale');
        }.bind(e),300);
    }

    return (
        <div className='playerDiv' onClick={(e)=> {
            setTimeout(function() {
                props.callback(e);
            },800);
            
            addanimation(e);
        }} data-id={props.dataid}>
            <img className='playerImg' src={props.info} draggable='false'></img>
            <div className='pname'>{final}</div>
        </div>
    )
}

export default Player