import React, { useState, useEffect } from 'react';
import { useLocation ,useNavigate, useParams } from "react-router-dom";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Checkbox from './Checkbox';
import classes from '../../assets/styles/QuestionInput.module.css'
const QuestionEdit = ({props}) => {
    const questions =props.questions;
    const { id } = useParams();
    const question = (questions.find(question => question.id == id))
    const [ data, setData  ]= useState({
        title: '',
        answer_one_input: '',
        answer_one_checkbox: false,
        answer_two_input: '',
        answer_two_checkbox: false,
        answer_three_input: '',
        answer_three_checkbox: false,
        answer_four_input: '',
        answer_four_checkbox: false,
        answer_five_input: '',
        answer_five_checkbox: false,
        answer_six_input: '',
        answer_six_checkbox: false,
        answer_seven_input: '',
        answer_seven_checkbox: false,
        answer_eight_input: '',
        answer_eight_checkbox: false,
        answer_nine_input: '',
        answer_nine_checkbox: false,
        answer_ten_input: '',
        answer_ten_checkbox: false,
    });
    useEffect(()=>{
        if(question){
            setData({
                title:question.title,
                answer_one_input:question.options[0].title,
                answer_one_checkbox:question.options[0].currect,
                answer_two_input:question.options[1].title,
                answer_two_checkbox:question.options[1].currect,
                answer_three_input:question.options[2].title,
                answer_three_checkbox:question.options[2].currect,
                answer_four_input:question.options[3].title,
                answer_four_checkbox:question.options[3].currect,
                answer_five_input:question.options[4].title,
                answer_five_checkbox:question.options[4].currect,
                answer_six_input:question.options[5].title,
                answer_six_checkbox:question.options[5].currect,
                answer_seven_input:question.options[6].title,
                answer_seven_checkbox:question.options[6].currect,
                answer_eight_input:question.options[7].title,
                answer_eight_checkbox:question.options[7].currect,
                answer_nine_input:question.options[8].title,
                answer_nine_checkbox:question.options[8].currect,
                answer_ten_input:question.options[9].title,
                answer_ten_checkbox:question.options[9].currect,
            })

        }
    },[])
    const navigate = useNavigate();
    const onHandleChange = (event) => {
        if(event.target.type === 'checkbox') {
            setData(data => {
                return { ...data, [event.target.name]: event.target.checked }
              });
              return;
        }
        setData(data => {
            return { ...data, [event.target.name]: event.target.value }
          });
    };
    async function handleSubmit(e) {
        e.preventDefault();

        const newQuestin = {
            "id": Math.floor(Math.random()*1000)            ,
            "isTrash": false,
            "title": data.title,
            "options": [
              {
                "title": data.answer_one_input,
              },
              {
                "title": data.answer_two_input,
              },
              {
                "title": data.answer_three_input,
              },
              {
                "title": data.answer_four_input,
              },
              {
                "title": data.answer_five_input,
              },
              {
                "title": data.answer_six_input,
              },
              {
                "title": data.answer_seven_input,
              },
              {
                "title": data.answer_eight_input,
              },
              {
                "title": data.answer_nine_input,
              },
              {
                "title": data.answer_ten_input,
              },
            ]
          };
          const newQuestinAndAns = {
            "id": Math.floor(Math.random()*1000)            ,
            "isTrash": false,
            "title": data.title,
            "options": [
              {
                "title": data.answer_one_input,
                "checked": data.answer_one_checkbox,
              },
              {
                "title": data.answer_two_input,
                "checked": data.answer_two_checkbox,
              },
              {
                "title": data.answer_three_input,
                
                "checked": data.answer_three_checkbox,
              },
              {
                "title": data.answer_four_input,
                
                "checked": data.answer_four_checkbox,
              },
              {
                "title": data.answer_five_input,
                
                "checked": data.answer_five_checkbox,
              },
              {
                "title": data.answer_six_input,
                "checked": data.answer_six_checkbox,
              },
              {
                "title": data.answer_seven_input,
                
                "checked": data.answer_seven_checkbox,
              },
              {
                "title": data.answer_eight_input,
                "checked": data.answer_eight_checkbox,
              },
              {
                "title": data.answer_nine_input,
                
                "checked": data.answer_nine_checkbox,
              },
              {
                "title": data.answer_ten_input,
                "checked": data.answer_ten_checkbox,
              },
            ]
          }
        //   props.questions.push(newQuestinAndAns);
          navigate("/questions", { questions: questions })
        // try {
        //   setError("");
        //   setLoading(true);
        //   history.push("/");
        // } catch (err) {
        //   console.log(err);
        //   setLoading(false);
        //   setError("Failed to login!");
        // }
      }
  return (
    <div>
 <form  onSubmit={handleSubmit}>
            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="title" value="Question" />

                <Input
                    type="text"
                    name="title"
                    value={data.title}
                    autoComplete="title"
                    isFocused={true}
                    handleChange={onHandleChange}
                />
                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_one_input" value="Answer One" />

                <Input
                    type="text"
                    name="answer_one_input"
                    value={data.answer_one_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_one_input"
                    handleChange={onHandleChange}
                />
                </div>
                <div className={classes.checkbox}>
                <Checkbox
                name="answer_one_checkbox"
                value={data.answer_one_checkbox}
                handleChange={onHandleChange}
                />
                <Label forInput="answer_one_checkbox" value="Select as Answer" />
                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_two_input" value="Answer two" />

                <Input
                    type="text"
                    name="answer_two_input"
                    value={data.answer_two_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_two_input"
                    handleChange={onHandleChange}
                />
                </div>
                <div className={classes.checkbox}>
                <Checkbox
                name="answer_two_checkbox"
                value={data.answer_two_checkbox}
                handleChange={onHandleChange}
                />
                
                <Label forInput="" value="Select as Answer" />

                </div>
            </div>
            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_three_input" value="Answer three" />

                <Input
                    type="text"
                    name="answer_three_input"
                    value={data.answer_three_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_three_input"
                    handleChange={onHandleChange}
                />

                </div>
                <div className={classes.checkbox}>

                
                <Checkbox
                name="answer_three_checkbox"
                value={data.answer_three_checkbox}
                handleChange={onHandleChange}
                />
                <Label forInput="" value="Select as Answer" />

                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>

                <Label forInput="answer_four_input" value="Answer four" />

                <Input
                    type="text"
                    name="answer_four_input"
                    value={data.answer_four_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_four_input"
                    handleChange={onHandleChange}
                />
                </div>
                <div className={classes.checkbox}>

                
                <Checkbox
                name="answer_four_checkbox"
                value={data.answer_four_checkbox}
                handleChange={onHandleChange}
                />
                <Label forInput="" value="Select as Answer" />
                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_five_input" value="Answer five" />
                <Input
                    type="text"
                    name="answer_five_input"
                    value={data.answer_five_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_five_input"
                    handleChange={onHandleChange}
                />

                </div>
                <div className={classes.checkbox}>
                <Checkbox
                name="answer_five_checkbox"
                value={data.answer_five_checkbox}
                handleChange={onHandleChange}
                />
                <Label forInput="" value="Select as Answer" />

                </div>

            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_six_input" value="Answer six" />

                <Input
                    type="text"
                    name="answer_six_input"
                    value={data.answer_six_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_six_input"
                    handleChange={onHandleChange}
                />

                </div>
                <div className={classes.checkbox}>

                <Checkbox
                name="answer_six_checkbox"
                value={data.answer_six_checkbox}
                handleChange={onHandleChange}
                />
                
                <Label forInput="" value="Select as Answer" />

                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_seven" value="Answer seven" />

                <Input
                    type="text"
                    name="answer_seven"
                    value={data.answer_seven}
                    className="mt-1 block w-full"
                    autoComplete="answer_seven"
                    handleChange={onHandleChange}
                />

                </div>
                <div className={classes.checkbox}>
                <Checkbox
                name="answer_seven"
                value={data.answer_seven}
                handleChange={onHandleChange}
                />
                <Label forInput="" value="Select as Answer" />

                </div>                
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>

                <Label forInput="answer_eight_input" value="Answer eight" />

                <Input
                    type="text"
                    name="answer_eight_input"
                    value={data.answer_eight_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_eight_input"
                    handleChange={onHandleChange}
                />
                </div>
                <div className={classes.checkbox}>

                
                <Checkbox
                name="answer_eight_checkbox"
                value={data.answer_eight_checkbox}
                handleChange={onHandleChange}
                />
                <Label forInput="" value="Select as Answer" />

                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_nine_input" value="Answer nine" />

                <Input
                    type="text"
                    name="answer_nine_input"
                    value={data.answer_nine_input}
                    className="mt-1 block w-full"
                    autoComplete="answer_nine_input"
                    handleChange={onHandleChange}
                />

                </div>
                <div className={classes.checkbox}>

                <Checkbox
                name="answer_nine_checkbox"
                value={data.answer_nine_checkbox}
                handleChange={onHandleChange}
                />
                
                <Label forInput="" value="Select as Answer" />

                </div>
            </div>

            <div className={classes.worp}>
                <div className={classes.inputHolder}>
                <Label forInput="answer_ten_input" value="Answer Ten" />

                <Input
                    type="text"
                    name="answer_ten_input"
                    value={data.answer_ten_input}
                    autoComplete="answer_ten_input"
                    handleChange={onHandleChange}
                />

                </div>
                <div className={classes.checkbox}>

                <Checkbox
                name="answer_ten_checkbox"
                value={data.answer_ten_checkbox}
                handleChange={onHandleChange}
                />
                
                <Label forInput="" value="Select as Answer" />

                </div>
            </div>

            <div className="flex items-center justify-end mt-4">

            <Button type="submit">
                <span>Submit Now</span>
            </Button>
            </div>
        </form>
    </div>
  )
}

export default QuestionEdit