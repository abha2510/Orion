import { SET_MESSAGE } from './authAction';

const initialState = {
    message: '',
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
}
