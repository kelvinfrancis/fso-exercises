import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({goodFb, neutralFb, badFb}) => {
  return(
    <p>
      good: {goodFb} <br/>
      neutral: {neutralFb} <br/>
      bad: {badFb}
    </p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }

  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <Header text='statistics' />
      <Statistics goodFb={good} neutralFb={neutral} badFb={bad}/>
    </div>
  )
}

export default App