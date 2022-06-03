
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../assets/styles/Account.module.css";

const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
<div className={classes.account}>
      {currentUser ? (
        <>
        <Link to="/quiz">Quiz</Link>
       {(currentUser[0].is_admin)?( <Link to="/questions">Questions</Link>):(<></>)}
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser[0].name}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          {/* <Link to="/login">Login</Link> */}
        </>
      )}
    </div>

// <div className={classes.account}>
//       {(
//         <>
//         <Link to="/questions">Questions</Link>
        
//         <Link to="/quiz">Quiz</Link>
//           <span className="material-icons-outlined" title="Account">
//             account_circle
//           </span>
//           <span>Joshio Banarjee</span>
//           <span
//             className="material-icons-outlined"
//             title="Logout"
//             onClick={()=>{}}
//           >
//             {" "}
//             logout{" "}
//           </span>
//         </>
//       )}
//     </div>
  )
}

export default Account