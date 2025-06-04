import React, { useState } from 'react'

const FormComment = () => {
    const [formData, setFormdata] = useState({
        userName: '',
        comments: '',
        rating: 5
    });
    function handleChange(e){
        setFormdata((currData)=>{
         return   {...currData, [e.target.name]:e.target.value}
        })
    }
    function handleSubmit(e){
e.preventDefault();
setFormdata({
    userName: '',
    comments: '',
    rating: ''
})
console.log(formData);
    }
    return (
        <div>
           <h1>Add Comment Below </h1>
           <br></br>
           <br />
            <form onSubmit={handleSubmit} action="">
                <label htmlFor='username'>Enter User Name</label>
            <input type='text'
                placeholder='Name'
                value={formData.userName}
                name='userName'
                onChange={handleChange}
                id='username'
            />
            <br /><br />
            <label htmlFor='comment'>Add Comment</label>
            <textarea
             value={formData.comments} 
             name='comments'
              onChange={handleChange}
             id='comment'
             >
            </textarea>
            <br /><br />
            <label htmlFor='rating'>Rating</label>
            <input type="number"
                value={formData.rating}
                placeholder='Rating'
                min={1} max={5}
                name='rating'
                id='rating'
                onChange={handleChange}

            />
            <button>Submit</button>
        </form>
        </div>
    )
}

export default FormComment
