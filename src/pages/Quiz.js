import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Answers from "../components/Answers";
import ProgressBar from "../components//ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      if(localStorage.getItem("questions") !== null){
      const questions =_.cloneDeep(JSON.parse(localStorage.getItem("questions")));
      return questions;
      } 
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
        localStorage.setItem('questions',JSON.stringify(questions))
      return questions;
    default:
      return state;
  }
};

const Quiz = ({props}) => {
  var questions = props.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  // const { currentUser } = useAuth();
  const history = useNavigate();
  // const { location } = history;
  // const { state } = location;
  // const { videoTitle } = state;
  useEffect(() => {
      dispatch({
        type: "questions",
        value: questions,
      });

  }, []);
  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });

  }
  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
    // handle when user clicks the prev button to get back to the previous question
    function prevQuestion() {
      if (currentQuestion >= 1 && currentQuestion <= questions.length) {
        setCurrentQuestion((prevCurrent) => prevCurrent - 1);
      }
    }
  // calculate percentage of progress
  const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;



// submit quiz
async function submit() {
  // const { uid } = currentUser;

  // const db = getDatabase();
  // const resultRef = ref(db, `result/`);

  // await set(resultRef, {
  //   [id]: qna,
  // });
  localStorage.removeItem("questions");
  history('/result', { state: {qna} });

  console.log(qna,'qna');
}


  return (
    <>
 {qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={percentage}
          />
        </>
      )}
    </>
  )
}

export default Quiz