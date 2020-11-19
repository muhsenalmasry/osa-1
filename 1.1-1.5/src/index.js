import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return (
    <div>
      <p> {props.name} {props.exercises} </p>
    </div>
  )
}

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} />
      <Part name={props.name3} exercises={props.exercises3} />
    </div>
  )

}

const Total = (props) => {
  return (
    <div>
      <p>Number of exersises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {

    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'States of component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content name1={course.parts[0].name} name2={course.parts[1].name} name3={course.parts[2].name}
        exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises} />
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

