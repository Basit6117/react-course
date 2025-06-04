import React, { useState } from 'react'
import './lottery.css'
import { GenTicket, sum } from './helper';
import Ticket from '../modernlottery/Ticket';

const Lottery = () => {
    const [ticket, setTicket] = useState(GenTicket(3));
    let isWinning = sum(ticket) === 15;

    function handleClick(){
      setTicket(GenTicket(3))
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
