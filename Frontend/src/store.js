import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Redux/Auth/auhReducer';
import faqReducer from './Redux/FAQ/faqReducer';
import adminReducer from './Redux/Admin/adminReducer';
import QueDetailReducer from './Redux/QuestionDetail/queReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    faq: faqReducer,
    admin:adminReducer,
    QueDetailReducer:QueDetailReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
