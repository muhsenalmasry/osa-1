import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (porps) => <h1>{porps.value}</h1>

const Button = (porps) => {
    return (
        <button onClick={porps.handleClick}>{porps.text}</button>
    )
}


const StatisticLine = (props) => {
    return(
        <tr><td>{props.text} </td><td> {props.value}</td></tr>
    )
}

const Statistics = (props) => {
    if(props.all === 0){
        return(
            <div>No feedback given</div>
        )
    }
    
    return(
        <div>
            <StatisticLine text="good" value={props.good}/>
            <StatisticLine text="neutral" value={props.neutral}/>
            <StatisticLine text="bad" value={props.bad}/>
            <StatisticLine text="all" value={props.all}/>
            <StatisticLine text="average" value={props.average}/>
            <StatisticLine text="positive" value={props.positive}/>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = () => good + neutral + bad
    const average = () => (good - bad) / all()
    const positive = () => 100 * good / all() + '%'

    const handleGood = () => {
        setGood( good + 1 )
    }

    const handleNeutral = () => {
        setNeutral (neutral+1)
    }
    
    const handleBad = () => {
        setBad(bad+1)
    }

    return (
        <div>
        <Display value='give feedback'/>
        <Button handleClick={handleGood} text='good'/>
        <Button handleClick={handleNeutral} text='neutral'/>
        <Button handleClick={handleBad} text='bad'/>
        <Display value='Statistics'/>
        <Statistics good={good} neutral={neutral}
        bad={bad} all={all()}
        average={average()} positive={positive()}/>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

