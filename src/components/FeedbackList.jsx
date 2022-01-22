import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback, handleDelete}) => {

  if(!feedback || feedback === 0) {
      return <p>No Feedback Yet</p>
  }


  return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map(feed => (
            <motion.div
              key={feed.id}
              initial={{opacity:0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <FeedbackItem feed={feed} handleDelete={handleDelete} key={feed.id} />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
