import React from 'react'
import Card from './Card'
import "./Card.css"

const CardTab = () => {
  return (
    <div className='CardTab'>
      <Card title="Basic"/>
      <Card title="Limited access"/>
      <Card title="Pro Plan" />
    </div>
  )
}

export default CardTab
