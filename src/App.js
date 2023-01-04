import React, { useEffect, useState } from 'react';
import './App.css';
import Final from './Components/Final';
import NextRound from './Components/NextRound';
import Player from './Components/Player';
import Score from './Components/Score';
import Title from './Components/Title';
import listOfPlayers from './getList';

function App() {
    let [output, setOutput] = useState([]);
    let [score, setScore] = useState(0);
    let [round, changeRound] = useState(0);
    let [isnext, setisnext] = useState(false);
    let [isfinal, setfinal] = useState(false);
    let [grid, setGrid] = useState('App4');
    let [best, setBest] = useState(0);
    let selected=[];
    let copyOutput;
    const rounds=[4,6,8,25];
    //Get Best score
    useEffect(()=> {
        if(localStorage.getItem('best')>best)setBest(localStorage.getItem('best')); 
    },[]);
    useEffect(()=> {
        generate();   
    },[round]);
    useEffect(()=> {
        if(score>best) {
            setBest(score);
            localStorage.setItem('best',score);
        }
    },[score]);

    function playagain() {
        setfinal(false);
        setScore(0);
        setOutput([]);
        if(round===0)generate();
        changeRound(0);
        setGrid('App4');
    }
    function check() {
        console.log('isfinal:', isfinal);
    }
    function nextround() {
        setisnext(false);
        if(round<rounds.length-1)changeRound(prev=>prev+1);
        else playagain();        
    }

    function addtoSelection(e) {
        const attempt=parseInt(e.target.parentElement.getAttribute('data-id'));
        if(selected.indexOf(attempt)!=-1) {
            e.target.parentElement.classList.add('wrong');
            setfinal(true);
            return;
        }
        else selected.push(attempt);
        setScore(prev=>prev+1+round);
        if(selected.length>=copyOutput.length) {
            setisnext(true);            
        }
        else reroll();
    }
    function reroll() {        
        let copyList=[...copyOutput];
        let randomRoll=[];
        while(copyList.length) {
            const len=copyList.length;
            const num=Math.floor(Math.random() *len);
            const pop=copyList.splice(num,1);
            if(pop[0]!=undefined)randomRoll.push(pop[0]);
        }
        setOutput(prev=>[...randomRoll]);
    }

    function getRandomPlayers(n) {
        let copyList=[...listOfPlayers];
        let randomList=[];
        while(randomList.length<n) {
            const len=copyList.length;
            const num=Math.floor(Math.random() *len)+1;
            const pop=copyList.splice(num,1);
            if(pop[0]!=undefined)randomList.push(pop[0]);
        }
        return randomList;
    }
    function generate() {
        let randomList=getRandomPlayers(rounds[round]);       
        let tempOutput=[];
        randomList.map((x, i) => {
            const thiskey=x.split('.')[1];
            tempOutput.push(<Player info={x} key={`${thiskey}`} callback={addtoSelection} dataid={i}></Player>);
        });
        copyOutput=[...tempOutput];
        setOutput(prev=>[...tempOutput]);
        if(round===1)setGrid('App3');
        else if(round===3)setGrid('App5');
        else setGrid('App4');
    }

  return (
    <div className="App">
        <Title />
        <Score score={score} round={round} rounds={rounds.length}/>
        <div className={grid}>
            {output}
        </div>
        <Final round={round} rounds={rounds.length} score={score} playagain={playagain} isfinal={isfinal}/>
        <NextRound nextround={nextround} isnext={isnext} round={round} rounds={rounds.length}/>

    </div>
  );
}

export default App;
