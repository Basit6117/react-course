import React, { useState } from 'react'

const Form = () => {
    const [inputState, setInputState] = useState({
        fullName: '',
        userName: '',
        password: ''
    });
    function handleChange(e){
// let newValue = e.target.value;
// let fieldName = e.target.name;
setInputState((currData)=>{
  // currData[fieldName] = newValue;
  return {...currData, [e.target.name]:  e.target.value}
});

    }
    function handleSubmit(e){
e.preventDefault();
setInputState({
     fullName: '',
    userName: '',
    password: ''

});
    console.log(inputState)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='fullname'>Enter Full Name</label>
        <input type='text'
         placeholder='Enter ur full name' 
         value={inputState.fullName} 
         onChange={handleChange} 
         id='fullname'
         name='fullName'
         />
         <label htmlFor='username'>Enter username</label>
        <input type='text'
         placeholder='Enter username' 
         value={inputState.userName} 
         onChange={handleChange} 
         id='username'
         name='userName'
         />
           <label htmlFor='password'>Enter Full Name</label>
        <input type='password'
         placeholder='Enter password' 
         value={inputState.password} 
         onChange={handleChange} 
         id='password'
         name='password'
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
