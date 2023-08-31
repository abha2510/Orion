export const SET_DASHBOARD_DATA = 'SET_DASHBOARD_DATA';
export const REMOVE_APPROVED_QUESTION = 'REMOVE_APPROVED_QUESTION';
export const DELETE_QUESTION_SUCCESS='DELETE_QUESTION_SUCCESS';
export const DELETE_ANSWER_SUCCESS = 'DELETE_ANSWER_SUCCESS';
export const APPROVE_ANSWER_SUCCESS = 'APPROVE_ANSWER_SUCCESS';
export const BAN_USER_SUCCESS = 'BAN_USER_SUCCESS';
export const UNBAN_USER_SUCCESS = 'UNBAN_USER_SUCCESS';
export const setDashboardData = (data) => ({
    type: SET_DASHBOARD_DATA,
    payload: data
});

export const removeApprovedQuestion = (id) => ({
    type: REMOVE_APPROVED_QUESTION,
    payload: id
});

export const deleteQuestionSuccess = (id) => ({
    type: DELETE_QUESTION_SUCCESS,
    payload: id
});

export const deleteAnswerSuccess = (id) => ({
    type: DELETE_ANSWER_SUCCESS,
    payload: { id }
});

export const approveAnswerSuccess = (id) => ({
    type: APPROVE_ANSWER_SUCCESS,
    payload: { id }
});

export const banUserSuccess = (id) => ({
    type: BAN_USER_SUCCESS,
    payload: { id }
});

export const unbanUserSuccess = (id) => ({
    type: UNBAN_USER_SUCCESS,
    payload: { id }
});