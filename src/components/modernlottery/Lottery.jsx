import React, { useState } from 'react'
import { GenTicket, sum } from '../loterry/helper'
import Ticket from './Ticket';
import './style.css'
const Lottery = ({ n=3, winCondition}) => {
    const [ticket, setTicket] = useState(GenTicket(n));
    let isWinning = winCondition(ticket);

    function handleClick(){
      setTicket(GenTicket(n))
    }
  return (
    <div >
      <h2>Lottery Games</h2>
      <div className='cont'>
<Ticket ticket={ticket}/>
    </div>
    <button onClick={handleClick}>Buy Ticket</button>
    <p>{isWinning && "Congratulations You Won !"}</p>
    </div>
  )
}

export default Lottery
