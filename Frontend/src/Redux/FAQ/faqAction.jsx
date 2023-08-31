export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_ANSWERS = 'SET_ANSWERS';

export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    payload: questions
});

export const setAnswers = (answers) => ({
    type: SET_ANSWERS,
    payload: answers
});
