import {
    APPROVE_ANSWER_SUCCESS,
    BAN_USER_SUCCESS,
    DELETE_ANSWER_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  REMOVE_APPROVED_QUESTION,
  SET_DASHBOARD_DATA,
  UNBAN_USER_SUCCESS,
} from "./adminAction";

const initialState = {
  pendingQuestions: [],
  data: {},
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case REMOVE_APPROVED_QUESTION:
      return {
        ...state,
        pendingQuestions: state.pendingQuestions.filter(
          (question) => question._id !== action.payload
        ),
      };
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        pendingQuestions: state.pendingQuestions.filter(
          (question) => question._id !== action.payload
        ),
      };
      case DELETE_ANSWER_SUCCESS:
        return {
            ...state,
            data: {
                ...state.data,
                pendingAnswers: state.data.pendingAnswers.filter(answer => answer._id !== action.payload.id)
            }
        };
    case APPROVE_ANSWER_SUCCESS:
     
        return {
            ...state,
            data: {
                ...state.data,
                pendingAnswers: state.data.pendingAnswers.filter(answer => answer._id !== action.payload.id)
            }
        };
    case BAN_USER_SUCCESS:
        return {
            ...state,
            data: {
                ...state.data,
                userList: state.data.userList.map(user => user._id === action.payload.id ? { ...user, banned: true } : user)
            }
        };
    case UNBAN_USER_SUCCESS:
        return {
            ...state,
            data: {
                ...state.data,
                userList: state.data.userList.map(user => user._id === action.payload.id ? { ...user, banned: false } : user)
            }
        };
    default:
      return state;
  }
};

export default adminReducer;
