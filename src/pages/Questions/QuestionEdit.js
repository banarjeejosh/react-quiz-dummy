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
    var question = (questions.find(question => question.id == id))
    const [ data, setData  ]= useState({
      title:question.title,
      answer_one_input:question.options[0].title,
      answer_one_checkbox:question.options[0].correct,
      answer_two_input:question.options[1].title,
      answer_two_checkbox:question.options[1].correct,
      answer_three_input:question.options[2].title,
      answer_three_checkbox:question.options[2].correct,
      answer_four_input:question.options[3].title,
      answer_four_checkbox:question.options[3].correct,
      answer_five_input:question.options[4].title,
      answer_five_checkbox:question.options[4].correct,
      answer_six_input:question.options[5].title,
      answer_six_checkbox:question.options[5].correct,
      answer_seven_input:question.options[6].title,
      answer_seven_checkbox:question.options[6].correct,
      answer_eight_input:question.options[7].title,
      answer_eight_checkbox:question.options[7].correct,
      answer_nine_input:question.options[8].title,
      answer_nine_checkbox:question.options[8].correct,
      answer_ten_input:question.options[9].title,
      answer_ten_checkbox:question.options[9].correct,
    });
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
        question.title= data.title
        question.options[0].title = data.answer_one_input
        question.options[0].correct = data.answer_one_checkbox
        question.options[1].title = data.answer_two_input
        question.options[1].correct = data.answer_two_checkbox
        question.options[2].title = data.answer_three_input
        question.options[2].correct = data.answer_three_checkbox
        question.options[3].title = data.answer_four_input
        question.options[3].correct = data.answer_four_checkbox
        question.options[4].title = data.answer_five_input
        question.options[4].correct = data.answer_five_checkbox
        question.options[5].title = data.answer_six_input
        question.options[5].correct = data.answer_six_checkbox
        question.options[6].title = data.answer_seven_input
        question.options[6].correct = data.answer_seven_checkbox
        question.options[7].title = data.answer_eight_input
        question.options[7].correct = data.answer_eight_checkbox
        question.options[8].title = data.answer_nine_input
        question.options[8].correct = data.answer_nine_checkbox
        question.options[9].title = data.answer_ten_input
        question.options[9].correct = data.answer_ten_checkbox
          navigate("/questions")

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
                checked={data.answer_one_checkbox}
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
                checked={data.answer_two_checkbox}
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
                checked={data.answer_three_checkbox}
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
                checked={data.answer_four_checkbox}
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
                checked={data.answer_five_checkbox}
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
                checked={data.answer_six_checkbox}
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
                checked={data.answer_seven}
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
                checked={data.answer_eight_checkbox}
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
                checked={data.answer_nine_checkbox}
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
                checked={data.answer_ten_checkbox}
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