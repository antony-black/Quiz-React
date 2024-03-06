import { questions } from "../constants/questionData";

export function Game({ step, setStep, correct, setCorrect }) {
  const round = questions[step];

  const handleAnswerClick = (index) => {
    setStep(step + 1);
    if (round.correct === index) {
      setCorrect(correct + 1);
    }
  };
  const progressed = (step / questions.length) * 100;

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progressed}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{round.title}</h1>
      <ul>
        {round.variants.map((answer, index) => {
          return (
            <li key={index} onClick={() => handleAnswerClick(index)}>
              {answer}
            </li>
          );
        })}
      </ul>
    </>
  );
}
