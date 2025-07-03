import { useState } from "react"

// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course.name}</h1>
//     </>
//   )
// }

// const Content = (props) => {
//   return (
//     <>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </>
//   )
// }

// const Part = (props) => {
//   return (
//     <>
//       <p>{props.part.name} {props.part.exercises}</p>
//     </>
//   )
// }

// const Total = (props) => {
//   const exercise1 = props.parts[0].exercises
//   const exercise2 = props.parts[1].exercises
//   const exercise3 = props.parts[2].exercises
//   const total = exercise1 + exercise2 + exercise3

//   return (
//     <>
//       <p>Number of exercises {total}</p>
//     </>
//   )
// }

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old.</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14
  //     }
  //   ]
  // }
  // const name = 'Peter';
  // const age = 10
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>

      <Display counter={counter} />
      <br />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={decreaseByOne} text='minus' />
      <Button onClick={setToZero} text='zero' />
      {/* <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
      {/* <h1>Greetings</h1>
      <Hello name="Booker" age={10 + 15} />
      <Hello name={name} age={age} /> */}
    </div>
  )
}

export default App