import React from 'react';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutLinkIcon from '../components/AboutLinkIcon';


const HomePage = () => {
    return (
        <div>
            <div className='container'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
            <AboutLinkIcon/>
        </div>
    )
}

export default HomePage;
