import './App.css'
import CardTab from './components/CardTab'
import Count from './components/Count'
import LikeButton from './components/LikeButton'
import Lottery from './components/modernlottery/Lottery'
import { LudoBoard } from './components/LudoBoard'
import Todo from './components/Todo/Todo'
import Ticket from './components/modernlottery/Ticket'
import { sum } from './components/loterry/helper'
import Form from './components/Form'
import FormComment from './components/FormComment'
import Joke from './components/Joke'
function App() {
  let winCondition = (ticket)=>{
    return ticket.every((num)=>num === ticket[0]);
  }
  return (
    <div className='container'>
      <Joke />
      {/* <FormComment /> */}
{/* <Form /> */}
    {/* <Lottery n={3} winCondition={winCondition}/> */}
      {/* <Lottery /> */}
      {/* <Todo /> */}
      {/* <LudoBoard /> */}
      {/* <LikeButton /> */}
{/* <Count /> */}

   {/* <CardTab /> */}
    </div>
  )
}

export default App
