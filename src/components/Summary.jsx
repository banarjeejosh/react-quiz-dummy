import { useMemo } from "react";
import successImage from "../assets/images/success.png";
import classes from "../assets/styles/Summary.module.css";

const Summary = ({ score, noq }) => {
    const getKeyword = useMemo(() => {
        if ((score / (noq * 5)) * 100 < 50) {
          return "failed";
        } else if ((score / (noq * 5)) * 100 < 75) {
          return "good";
        } else if ((score / (noq * 5)) * 100 < 100) {
          return "very good";
        } else {
          return "excellent";
        }
      }, [score, noq]);
    
      const image =   successImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      { (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  )
}

export default Summary