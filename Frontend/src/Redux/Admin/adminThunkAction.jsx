import axios from 'axios';
import { approveAnswerSuccess, banUserSuccess, deleteAnswerSuccess, deleteQuestionSuccess, removeApprovedQuestion, setDashboardData, unbanUserSuccess } from './adminAction';

const BASE_URL = "https://bewildered-suspenders-clam.cyclic.app";

export const fetchDashboardData = (authToken) => dispatch => {
    axios.get(`${BASE_URL}/adminDashboard`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(response => {
        dispatch(setDashboardData(response.data));
        console.log(response.data);
    })
    .catch(error => console.error("Error fetching data:", error));
};

export const approveQuestion = (id, authToken) => dispatch => {
    axios.patch(`${BASE_URL}/questions/${id}/approve`, {}, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(response => {
        if (response.data.message === 'Question approved successfully') {
            // Dispatch action to update the local state
            dispatch(removeApprovedQuestion(id));
            //window.location.reload();
        }
    })
    .catch(error => {
        console.error("Error approving question:", error.message);
        console.error("Request:", error.request);
        if (error.response) {
            console.error("Response:", error.response.data);
        }
    });
};
export const deleteQuestion = (id, authToken) => dispatch => {
    axios.delete(`${BASE_URL}/questions/${id}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(response => {
        dispatch(deleteQuestionSuccess(id));
        window.location.reload();
    })
    .catch(error => {
        console.error("Error deleting question:", error);
    });
};

export const approveAnswer = (id, authToken) => dispatch => {
    axios.patch(`${BASE_URL}/answers/${id}/approve`, {}, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(() => {
        dispatch(approveAnswerSuccess(id));
    })
    .catch(error => {
        console.error("Error approving answer:", error);
    });
};

export const deleteAnswer = (id, authToken) => dispatch => {
    axios.delete(`${BASE_URL}/answers/${id}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(() => {
        dispatch(deleteAnswerSuccess(id));
    })
    .catch(error => {
        console.error("Error deleting answer:", error);
    });
};

export const banUser = (id, authToken) => dispatch => {
    axios.patch(`${BASE_URL}/${id}/ban`, {}, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(() => {
        dispatch(banUserSuccess(id));
    })
    .catch(error => {
        console.error("Error banning user:", error);
    });
};

export const unbanUser = (id, authToken) => dispatch => {
    axios.patch(`${BASE_URL}/${id}/unban`, {}, {
        headers: { 'Authorization': `Bearer ${authToken}` }
    })
    .then(() => {
        dispatch(unbanUserSuccess(id));
    })
    .catch(error => {
        console.error("Error unbanning user:", error);
    });
};
export const logout = () => async dispatch => {
    try {
      await axios.post('/logout');  
      dispatch({
        type: 'LOGOUT_SUCCESS' 
      });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };