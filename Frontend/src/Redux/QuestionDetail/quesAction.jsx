export const SET_QUESTIONS='SET_QUESTIONS';
export const SET_ANSWERS='SET_ANSWERS';
export const ADD_ANSWER='ADD_ANSWER';  
export const SET_QUESTION_DETAIL = 'SET_QUESTION_DETAIL';
export const UPDATE_ANSWER_RATING = 'UPDATE_ANSWER_RATING';

export const setQuestions = (data) => {
    return {
        type: 'SET_QUESTIONS',
        payload: data
    };
};

export const setAnswers = (data) => {
    return {
        type: 'SET_ANSWERS',
        payload: data
    };
};

export const addAnswer = (data) => {
    return {
        type: 'ADD_ANSWER',
        payload: data
    };
};

export const setQuestionDetail = (question) => {
    return {
        type: SET_QUESTION_DETAIL,
    payload: question
    }
}

export const updateAnswerRating = (answer) => {
    return {
        type: UPDATE_ANSWER_RATING,
        payload: answer
    };
};
