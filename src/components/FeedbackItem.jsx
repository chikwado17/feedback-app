import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({feed, handleDelete}) => {



    return (
        <Card reverse={false}>
            <div className="num-display">{feed.rating}</div>
            <button onClick={() => handleDelete(feed.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{feed.text}</div>
        </Card>
    );
};

export default FeedbackItem;
