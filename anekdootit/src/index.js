import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
  <div>
    <h1>{props.text}</h1>
  </div>
  )
}

const Anek = (props) => <p>{props.anekdootti}<br />has {props.value} votes</p>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const max = points.indexOf(Math.max.apply(null, points))

  const handleAnek = () => setSelected(Math.floor(Math.random() * 6 + 0))

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }



  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anek anekdootti={props.anecdotes[selected]} value={points[selected]} />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleAnek} text='get another' />
      <Header text='Anecdote with most votes'/>
      <Anek anekdootti={props.anecdotes[max]} value={points[max]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
