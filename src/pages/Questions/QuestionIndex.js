import React ,{ useState, useEffect } from 'react'
import { Link ,useNavigate } from "react-router-dom";
import Button from '../../components/Button';
import Tables from '../../components/Tables';
// import { AuthProvider } from '../../contexts/AuthContext';
import { useAuth } from '../../contexts/AuthContext';
const QuestionIndex = ({props}) => {
    const navigate = useNavigate();
    const dataquestions = props.questions;
      const [questions, setQuestions] = useState(dataquestions);

      const trashQuestion = (id) =>{
        questions.find(question => question.id === id).isTrash = true;
        setQuestions(question=>([...questions]))
      }
  return (
    <div className='questionWorp'>
        <div style={{ display:'flex', justifyContent: 'space-between' , marginBottom:'10px'}} >
        <Link to="/questions/add" >
            <Button >Add New</Button>
        </Link>
        <Link to="/questions/trash" >
            <Button>Trash</Button>
        </Link>
        </div>
        <div>

        <Tables>
            {(questions) &&
            questions.filter(question=>question.isTrash === false).map((question,key)=>(
            
                <tr key={key}>
                    <td>
                        {key+1}
                    </td>
                    <td>
                        {question.title}
                    </td>
                    <td>
                        <div style={{ display: 'flex' }}>
                        <Button onClick={()=>trashQuestion(question.id)} >Delete</Button> <Button onClick={()=>(navigate(`/questions/${question.id}/edit`, { question: question }))} style={{ marginLeft: '5px' }}>Edit</Button>
                        </div>
                    </td>
                </tr>
            ))}
            {questions.filter(question => question.isTrash ===false).length === 0 && (
                    <tr>
                        <td
                            colSpan="4"
                        >
                            No Question found. 
                        </td>
                    </tr>
                )}
        </Tables>

        </div>
    </div>
  )
}

export default QuestionIndex