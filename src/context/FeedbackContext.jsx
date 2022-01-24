import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const FeedbackContext = createContext();


const FeedbackContextProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);
    const  [isLoading, setIsLoading] = useState(true);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    });


    const getFeedback = async ()  => {
       
        const response = await axios.get('http://localhost:5000/feedback');
        setFeedback(response.data);
        setIsLoading(false);
    } 

    useEffect(() => {
        getFeedback();
    },[]);

    //function to edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    }


    //function to delete feedback
    const deleteFeedback = async (id) => {
        await axios.delete(`http://localhost:5000/feedback/${id}`);
        setFeedback(feedback.filter((item) => item.id !== id));
    }
    
    //function to add new feedback
    const addFeedback = async (newFeedback) => {
        const response = await axios.post('http://localhost:5000/feedback',newFeedback);
        setFeedback([response.data, ...feedback])
    }

    const updateFeedback = async (id, updatedEdit) => {
        const response = await axios.put(`http://localhost:5000/feedback/${id}`, updatedEdit);
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...response.data} : item));
    }
  
    
    return (
        <FeedbackContext.Provider value={{
            feedback, 
            deleteFeedback, 
            addFeedback, 
            isLoading, 
            editFeedback, 
            updateFeedback, 
            feedbackEdit
        }}>   
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContextProvider
