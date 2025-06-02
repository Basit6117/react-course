import React, { useState } from 'react'
function init(){
  console.log('hello')
  return Math.random();
  
}
const Count = () => {
    let [count,  setCount] = useState(init);
     function handleClick(){
       setCount((prev)=>{
      return  prev + 2;
       });
      //  setCount((prev)=>{
      // return  prev + 2;
      //  });
    }
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Count
