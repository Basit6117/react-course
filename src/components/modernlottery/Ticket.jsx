import React from 'react'
import TicketNum from './TicketNum'
import './style.css'
const Ticket = ({ticket}) => {
  return (
    <div className='tikNumContainer'>
      <p>Ticket</p>
      <br></br>
        {
            ticket.map((oneTik, index)=>(
             <TicketNum ticket={oneTik} key={index}/>
            ))
        }
   
    </div>
  )
}

export default Ticket
