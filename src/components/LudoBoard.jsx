import React, { useState } from 'react'

export const LudoBoard = () => {
    const [moves , setMovies] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    const [arr, setArr] = useState(['no move']);
    function handleBlue(){
        // setMovies((prevMove)=>{
        //     return {...prevMove,blue: prevMove.blue + 1}
        // });
        // console.log(moves.blue);
     
       setArr((prev)=>{
      return  [...prev, "blue move"]
       });
       console.log(arr);
    }
  return (
    <div className='Board'>
      <p>{arr}</p>
        <p >Blue movie = {moves.blue}</p>
        <button style={{backgroundColor: 'blue', height: '60px'}} onClick={handleBlue}>+1</button>
        <p>Red movie = {moves.red}</p>
        <button style={{backgroundColor: 'red', height: '60px'}}>+1</button>
        <p>Yellow movie = {moves.yellow}</p>
        <button style={{backgroundColor: 'yellow', height: '60px',color: 'black'}}>+1</button>
        <p>Green movie = {moves.green}</p>
        <button style={{backgroundColor: 'green', height: '60px'}}>+1</button>
    </div>
  )
}
