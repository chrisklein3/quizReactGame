import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from "../img/quiz.png";

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <img src={Quiz} alt="Cérebro" />
      <h2>Seja bem-vindo!</h2>
      <p>Clique abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        JOGAR</button>
      </div>
  )
}

export default Welcome