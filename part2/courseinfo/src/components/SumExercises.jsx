const SumExercises = ({ parts }) => {
  const initialValue = 0;
  const sumExercises = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return (
    <p>
      <strong>Total of {sumExercises} exercises</strong>
    </p>
  );
};

export default SumExercises;