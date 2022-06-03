import _ from "lodash";
import { useNavigate, useLocation } from "react-router-dom";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";

const Result = ({props}) => {
    // const { id } = useParams();
    // const navigate  = useNavigate();
    // const navigate = useLocation();
    const { state } = useLocation();
    console.log(useLocation());
    const { qna } = state;
    const answers = props.questions;


    function calculate() {
        let score = 0;
    
        answers.forEach((question, index1) => {
          let correctIndexes = [],
            checkedIndexes = [];
    
          question.options.forEach((option, index2) => {
            if (option.correct) correctIndexes.push(index2);
            if (qna[index1].options[index2].checked) {
              checkedIndexes.push(index2);
              option.checked = true;
            }
          });
    
          if (_.isEqual(correctIndexes, checkedIndexes)) {
            score = score + 5;
          }
        });
    
        return score;
      }
    
      const userScore = calculate();

  return (
    <>

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  )
}

export default Result