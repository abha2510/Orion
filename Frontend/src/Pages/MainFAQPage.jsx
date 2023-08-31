import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, fetchAnswers } from "../Redux/FAQ/faqThunkAction";
import {
  FAQContainer,
  QuestionBlock,
  Main,
  AddQuestionButton,
  Modal,
  ModalContent,
  QuestionTextArea,
  ModalButton,
} from "../Styles/FAQStyles";
import { Link, useParams } from "react-router-dom";
import { fetchQuestionDetail } from "../Redux/QuestionDetail/queThunkAction";

const MainFAQPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [questionText, setQuestionText] = useState("");
  const authToken = localStorage.getItem("authToken");
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.faq.questions);
  const answers = useSelector((state) => state.faq.answers);


  useEffect(() => {
    dispatch(fetchQuestions(authToken));
    dispatch(fetchAnswers(authToken));
  }, [dispatch, authToken]);

  const handleQuestionSubmit = async () => {
    try {
      await axios.post(
        "https://bewildered-suspenders-clam.cyclic.app/questions",
        { text: questionText },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setShowModal(false);
      dispatch(fetchQuestions(authToken));
      setAlert("Question submitted! Status is pending. Admin has to approve.");
    } catch (error) {
      console.error("Error adding question:", error.response.data);
    }
  };
  useEffect(() => {
    dispatch(fetchQuestionDetail(authToken, questionId));
  }, [authToken, dispatch, questionId]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert("");
      }, 5000); 

      return () => clearTimeout(timer); 
    }
}, [alert]);
const saveInLS=(id)=>{
    //  console.log(id)
     localStorage.setItem("keyid",id)
   }
  return (
    <FAQContainer>
        {alert && <div className="alert">{alert}</div>}
      <AddQuestionButton onClick={() => setShowModal(true)}>
        Add Question
      </AddQuestionButton>
      {questions.map((question) => (
        <QuestionBlock key={question.id}>
          <p>{question.text}</p>
          <div>
            {answers
              .filter((answer) => answer.questionId._id === question._id)
              .map((answer) => (
                <p key={answer.id}>{answer.text}</p>
              ))}
          </div>

          <button onClick={()=>saveInLS(question._id)}>
            <Link to={'/detail'}>View Detail</Link>
          </button>
        </QuestionBlock>
      ))}
      {showModal && (
        <Modal>
          <ModalContent>
            <h3>Add a new Question</h3>
            <QuestionTextArea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Enter your question here..."
            />
            <ModalButton onClick={handleQuestionSubmit}>Submit</ModalButton>
            <ModalButton onClick={() => setShowModal(false)}>Close</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </FAQContainer>
  );
};

export default MainFAQPage;

