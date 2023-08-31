import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  fetchAnswers,
  fetchQuestionDetail,
  incrementRating,
} from "../Redux/QuestionDetail/queThunkAction";
import {
  FAQContainer,
  QuestionBox,
  AnswerSection,
  Modal,
  ModalContent,
  CloseModalButton,
  AnswerInput,
  PostButton,
} from "../Styles/QuestionDetail";
import { useParams } from "react-router-dom";
const QuestionDetail = () => {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  const question = useSelector((state) => state.faq.question);
  const ansdata = useSelector((state) => state.faq.answers);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchQuestionDetail(authToken, id));  
    dispatch(fetchAnswers(authToken));
  }, [authToken, dispatch, id]);

  
  // console.log("que",question);
  const [isOpen, setIsOpen] = useState(false);
  const [newAnswer, setNewAnswer] = useState("");


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  const postAnswer = (questionId) => {
    dispatch(incrementRating(questionId, authToken));
  };
  const incrementRating = (answerId) => {
    dispatch(incrementRating(answerId, authToken));
  };

  return (
   
        <FAQContainer>
          {question && ( // Ensure 'question' exists before accessing its properties.
        <QuestionBox key={question._id}>
            <p>{question.text}</p>
        </QuestionBox>
    )}
        {/* {question && ( // Check if question exists
           <QuestionBox key={question._id}>
               <p>{question.text}</p>
               <AnswerSection>
                   {ansdata
                       .filter(answer => answer.questionId._id === question._id)
                       .map(answer => (
                           <div key={answer._id}>
                               <p>{answer.text}</p>
                               <p>{answer.ratings}</p>
                               <button onClick={() => incrementRating(answer._id)}>Rate</button>
                           </div>
                       ))
                   }
               </AnswerSection>
               <button onClick={openModal}>Add Your Answer</button>
               {isOpen && (
                   <Modal>
                       <ModalContent>
                           <CloseModalButton onClick={closeModal}>&times;</CloseModalButton>
                           <h2>Add your Answer Here .....</h2>
                           <AnswerInput
                               type="text"
                               value={newAnswer}
                               onChange={(e) => setNewAnswer(e.target.value)}
                           />
                           <PostButton onClick={() => postAnswer(question._id)}>Post</PostButton>
                       </ModalContent>
                   </Modal>
               )}
           </QuestionBox>
       )} */}
    </FAQContainer>
  );
};
export default QuestionDetail;
