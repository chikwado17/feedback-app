import React, { useState } from 'react';

import FeedbackData  from '../data/FeedbackData';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutLinkIcon from '../components/AboutLinkIcon';


const HomePage = () => {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  
    const addFeedback = (newFeedback) => {
  
      setFeedback([newFeedback,...feedback]);
    }

    
    return (
        <div>
            <div className='container'>
            <FeedbackForm handleSubmit={addFeedback}/>
            <FeedbackStats feedback={feedback} />
            <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
        </div>
            <AboutLinkIcon/>
        </div>
    )
}

export default HomePage;
