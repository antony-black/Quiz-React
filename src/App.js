import React from "react";
import { questions } from "./constants/questionData";
import { Result } from "./components/Result";
import { Game } from "./components/Game";
import "./index.scss";

// function Result({ correct }) {
//   return (
//     <div className="result">
//       <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
//       <h2>{`You answered right ${correct} of ${questions.length}`}</h2>
//       <a href="/">
//         <button>Try again!</button>
//       </a>
//     </div>
//   );
// }

// function Game({ step, setStep, correct, setCorrect }) {
//   const round = questions[step];

//   const handleAnswerClick = (index) => {
//     setStep(step + 1);
//     if (round.correct === index) {
//       setCorrect(correct + 1);
//     }
//   };
//   const progressed = (step / questions.length) * 100;

//   return (
//     <>
//       <div className="progress">
//         <div
//           style={{ width: `${progressed}%` }}
//           className="progress__inner"
//         ></div>
//       </div>
//       <h1>{round.title}</h1>
//       <ul>
//         {round.variants.map((answer, index) => {
//           return (
//             <li key={index} onClick={() => handleAnswerClick(index)}>
//               {answer}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  return (
    <div className="App">
      {step < questions.length ? (
        <Game
          step={step}
          setStep={setStep}
          correct={correct}
          setCorrect={setCorrect}
        />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
