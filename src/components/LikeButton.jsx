import React, { useState } from 'react'

const LikeButton = () => {
    const [hasLike, setHasLike] = useState(false);
    const [count, setCount] = useState(0);
    function toggleLike(){
        setHasLike(!hasLike);
        {
            !hasLike ? setCount(count+1)
            : setCount(count-1)
        }
        // setCount(hasLike ? count + 1 : count - 1);
    }
  return (
    <div>
      <h1
       onClick={toggleLike}>
        {hasLike ? '❤️' : '🤍'}
      </h1>
      <p>Like {count}</p>
    </div>
  )
}

export default LikeButton
