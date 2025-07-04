import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ goodFb, neutralFb, badFb }) => {
  const allFeedbacks = goodFb + neutralFb + badFb;
  const avgFeedbacks = (goodFb + neutralFb + badFb) / 3;
  const positiveAvg = (goodFb / allFeedbacks) * 100;

  if (!allFeedbacks) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <StatisticLine text={"good"} value={goodFb} />
        <StatisticLine text={"neutral"} value={neutralFb} />
        <StatisticLine text={"bad"} value={badFb} />
        <StatisticLine text={"total"} value={allFeedbacks} />
        <StatisticLine text={"average"} value={avgFeedbacks} />
        <StatisticLine text={"positive"} value={positiveAvg} simbol={"%"} />
      </table>
    );
  }
};

const StatisticLine = ({ text, value, simbol }) => {
  return (
    <tr>
      {text}
      <td>
        {value} {simbol}
      </td>
    </tr>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const updateGood = good + 1;
    setGood(updateGood);
  };

  const handleNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
  };

  const handleBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Header text="statistics" />
      <Statistics goodFb={good} neutralFb={neutral} badFb={bad} />
    </div>
  );
};

export default App;
