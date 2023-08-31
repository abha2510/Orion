import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDashboardData,
  approveQuestion,
  deleteQuestion,
  approveAnswer,
  deleteAnswer,
  banUser,
  unbanUser,
} from "../Redux/Admin/adminThunkAction";
import {
  Container,
  ActionButton,
  DataList,
  DataItem,
} from "../Styles/AdminStyle";

function AdminDashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin.data);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    dispatch(fetchDashboardData(authToken));
  }, [dispatch, authToken]);

  if (!data) {
    return <div>Loading...</div>;
  }

  function handleApproveQuestion(id) {
    dispatch(approveQuestion(id, authToken));
  }

  function handleDeleteQuestion(id) {
    dispatch(deleteQuestion(id, authToken));
  }

  function handleApproveAnswer(id) {
    dispatch(approveAnswer(id, authToken));
  }

  function handleDeleteAnswer(id) {
    dispatch(deleteAnswer(id, authToken));
  }

  function handleBanUser(id) {
    dispatch(banUser(id, authToken));
  }

  function handleUnbanUser(id) {
    dispatch(unbanUser(id, authToken));
  }

  return (
    <Container>
      <h1>Admin Dashboard</h1>

      <h2>Pending Questions</h2>
      <DataList>
        {data.pendingQuestions &&
          data.pendingQuestions.map((question) => (
            <DataItem key={question._id}>
              {question.text}
              <ActionButton onClick={() => handleApproveQuestion(question._id)}>
                Approve
              </ActionButton>
              <ActionButton actionType="delete" onClick={() => handleDeleteQuestion(question._id)}>
                Delete
              </ActionButton>
            </DataItem>
          ))}
      </DataList>

      <h2>Pending Answers</h2>
      <DataList>
        {data.pendingAnswers &&
          data.pendingAnswers.map((answer) => (
            <DataItem key={answer._id}>
              {answer.text}
              <ActionButton onClick={() => handleApproveAnswer(answer._id)}>
                Approve
              </ActionButton>
              <ActionButton onClick={() => handleDeleteAnswer(answer._id)}>
                Delete
              </ActionButton>
            </DataItem>
          ))}
      </DataList>

      <h2>User List</h2>
      <DataList>
        {data.userList &&
          data.userList.map((user) => (
            <DataItem key={user._id}>
            {user.username}
            {user.banned ? (
                <ActionButton actionType="unban" onClick={() => handleUnbanUser(user._id)}>
                    Unban
                </ActionButton>
            ) : (
                <ActionButton actionType="ban" onClick={() => handleBanUser(user._id)}>
                    Ban
                </ActionButton>
            )}
        </DataItem>
        
          ))}
      </DataList>
    </Container>
  );
}

export default AdminDashboard;
