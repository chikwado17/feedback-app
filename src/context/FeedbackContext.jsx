import React, { useState, createContext } from 'react';


export const FeedbackContext = createContext();


const FeedbackContextProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is feedback 1',
            rating: 5
        },
        {
            id: 2,
            text: 'this is feedback 2',
            rating: 10
        },
        {
            id: 3,
            text: 'this is feedback 3',
            rating: 1
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    });



    //function to delete feedback
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
    }
    
    //function to add new feedback
    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback,...feedback]);
    }

    //function to edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    }


    const updateFeedback = (id, updatedEdit) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedEdit} : item));
    }
  
    
    return (
        <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, updateFeedback, feedbackEdit}}>   
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContextProvider
