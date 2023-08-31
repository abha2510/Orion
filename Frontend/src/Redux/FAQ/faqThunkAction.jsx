import axios from 'axios';
import { setQuestions, setAnswers } from './faqAction';

export const fetchQuestions = (authToken) => async dispatch => {
    try {
        const response = await axios.get('https://bewildered-suspenders-clam.cyclic.app/questions', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        dispatch(setQuestions(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const fetchAnswers = (authToken) => async dispatch => {
    try {
        const response = await axios.get('https://bewildered-suspenders-clam.cyclic.app/answers', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        dispatch(setAnswers(response.data));
    } catch (error) {
        console.error(error);
    }
};
