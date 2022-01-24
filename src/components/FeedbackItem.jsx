import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FeedbackContext } from '../context/FeedbackContext';
import Card from './shared/Card';

const FeedbackItem = ({feed}) => {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card reverse={false}>
            <div className="num-display">{feed.rating}</div>
            <button onClick={() => deleteFeedback(feed.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editFeedback(feed)} className='edit'>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{feed.text}</div>
        </Card>
    );
};

export default FeedbackItem;
