import React from "react";
import { questions } from "./constants/questionData";
import { Result } from "./components/Result";
import { Game } from "./components/Game";
import "./index.scss";

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
