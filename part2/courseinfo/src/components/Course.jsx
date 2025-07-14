import Header from "./Header";
import Content from "./Content";
import SumExercises from "./SumExercises";

const Course = ({ title, parts }) => {
  return (
    <>
      <Header courseName={title} />
      <Content parts={parts} />
      <SumExercises parts={parts} />
    </>
  );
};

export default Course;