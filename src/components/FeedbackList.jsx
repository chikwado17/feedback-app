import React, { useContext } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { FeedbackContext } from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {

  const { feedback, isLoading } = useContext(FeedbackContext);

  if(!isLoading && (!feedback || feedback === 0)) {
      return <p>No Feedback Yet</p>
  }


  return isLoading ? (<Spinner /> 
   ) : (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map(feed => (
          <motion.div
            key={feed.id}
            initial={{opacity:0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <FeedbackItem feed={feed} key={feed.id} />
          </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
