import React, { useContext, useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { FeedbackContext } from '../context/FeedbackContext';


const FeedbackForm = () => {

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);


    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }

    }, [feedbackEdit]);


    const getSelectedRating = (e) => {
        setRating(e)
    }


    const handleInputChange = (e) => {
        setText(e.target.value);

        if(text === '') {
            setBtnDisabled(true);
            setMessage('')
        }else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Review must be more than 10 characters');
        }else {
            setBtnDisabled(false);
            setMessage(null);
        }
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length > 10) {

            const feedbackData = {
                text,
                rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, feedbackData);
            }else {
                addFeedback(feedbackData);
            }
        }

        setText('');
    }

    
  return (
    <Card>
       <form onSubmit={handleFormSubmit}>
            <h2>How would you rate your services with us?</h2>
            <RatingSelect getSelectedRating={getSelectedRating} />
            <div className="input-group">
                <input onChange={handleInputChange} value={text} type="text" placeholder='write a review' />
                <Button type='submit' disabled={btnDisabled} version={'primary'}>Send</Button>
            </div>
       </form>
       {message && <p className='message'>{message}</p>}
    </Card>
  );
};

export default FeedbackForm;
