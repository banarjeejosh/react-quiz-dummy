import classes from "../assets/styles/Question.module.css";
import Answers from "./Answers";

const Questions = ({ answers = [] }) => {
    return answers.map((answer, index) => (
        <div className={classes.question} key={index}>
          <div className={classes.qtitle}>
            <span className="material-icons-outlined"> help_outline </span>
            {answer.title}
          </div>
          <Answers input={false} options={answer.options} />
        </div>
      ));
}

export default Questions