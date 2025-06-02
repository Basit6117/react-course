import React from 'react'
import "./Card.css"
import Button from './Button'
const Card = ({title}) => {
  return (
    <div className='container'>
      <div className='Card'>
        <div className='card-body'>
        <p>Free Plan</p>
        <h1>{title}</h1>
        <li>✔️ 3 user request </li>
        <li>✔️ 10 downloads per day </li>
        <li>✔️ Daily content updates</li>
        <li>✔️ Fully editable file </li>
        <Button />
        </div>

      </div>
    </div>
  )
}

export default Card
