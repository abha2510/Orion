import {
  ADD_ANSWER,
  SET_ANSWERS,
  SET_QUESTIONS,
  SET_QUESTION_DETAIL,
  UPDATE_ANSWER_RATING,
} from "./quesAction";

const initialState = {
    questions: [],
    answers: [],
    question: null,
  };
  

const QueDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_ANSWERS:
      return { ...state, answers: action.payload };
    case ADD_ANSWER:
      return { ...state, answers: [...state.answers, action.payload] };
    case SET_QUESTION_DETAIL:
      return { ...state, question: action.payload };
    case UPDATE_ANSWER_RATING:
      return {
        ...state,
        answers: state.answers.map((ans) =>
          ans._id === action.payload._id ? action.payload : ans
        ),
      };
    default:
      return state;
  }
};

export default QueDetailReducer;
