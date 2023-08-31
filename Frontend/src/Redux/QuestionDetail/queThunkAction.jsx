
import axios from 'axios';
import { setQuestions, setAnswers, addAnswer, setQuestionDetail, updateAnswerRating } from '../QuestionDetail/quesAction';

export const fetchQuestions = (authToken) => dispatch => {
    axios.get('https://bewildered-suspenders-clam.cyclic.app/questions', {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then(response => {
        dispatch(setQuestions(response.data));
    })
    .catch(err => {
        console.error(err);
    });
};

export const fetchAnswers = (authToken) => dispatch => {
    axios.get('https://bewildered-suspenders-clam.cyclic.app/answers', {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then(response => {
        dispatch(setAnswers(response.data));
    })
    .catch(err => {
        console.error(err);
    });
};

export const postNewAnswer = (id, newAnswer, authToken) => dispatch => {
    axios.post(`https://bewildered-suspenders-clam.cyclic.app/questions/${id}/answers`, {
        text: newAnswer
    }, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then(response => {
        dispatch(addAnswer(response.data));
    })
    .catch(err => {
        console.error(err);
    });
};


export const fetchQuestionDetail = (authToken, questionId) => async dispatch => {
    try {
        const response = await axios.get(`https://bewildered-suspenders-clam.cyclic.app/questions/${questionId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        dispatch(setQuestionDetail(response.data)); 
        console.log(response.data);// This is a new action creator you should create to set a single question detail.
    } catch (error) {
        console.error(error);
    }
};


export const incrementRating = (answerId, authToken) => async dispatch => {
    try {
        const response = await axios.patch(`https://bewildered-suspenders-clam.cyclic.app/answers/${answerId}/rate`,
        {
            value: 1 
        },
        {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });

        dispatch(updateAnswerRating(response.data)); // This will update the answer's rating in the Redux store
    } catch (error) {
        console.error("Error incrementing rating:", error);
    }
};
