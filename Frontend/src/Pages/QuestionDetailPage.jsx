import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  fetchAnswers,
  fetchQuestionDetail,
 incrementRating,
  postNewAnswer,
  
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
import { updateAnswerRating } from "../Redux/QuestionDetail/quesAction";
// import { useParams } from "react-router-dom";
const QuestionDetail = () => {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  const question = useSelector((state) => state.faq.questions);
  const ansdata = useSelector((state) => state.faq.answers);
  // const { id } = useParams();

  const LS = localStorage.getItem("keyid");
  // console.log(LS,"la")

  // console.log(question,"ques")
  const selectedItem = question.find((item) => item._id === LS);
  // console.log("sel",selectedItem)

  useEffect(() => {
    dispatch(fetchQuestionDetail(authToken));
    dispatch(fetchAnswers(authToken));
  }, [authToken, dispatch]);

  // console.log("que",question);
  const [isOpen, setIsOpen] = useState(false);
  const [newAnswer, setNewAnswer] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const postAnswer = (questionId,newAnswer,authToken) => {
    // console.log(questionId);
    dispatch(postNewAnswer(questionId, newAnswer,authToken));
    closeModal();
  };


  const incrementRatingLocally = (answerId, authToken) => {
    console.log(answerId)
    dispatch(updateAnswerRating(answerId, authToken));
  };

  return (
    <>
    
   <FAQContainer>
  {selectedItem && ( // Check if question exists
    <QuestionBox key={selectedItem._id}>
      <p>{selectedItem.text}</p>
      
      <AnswerSection>
        {ansdata
          .filter((answer) => answer.questionId._id === LS)
          .map((answer) => (
            <div key={answer._id}>
              <p>{answer.text}</p>
              <p>{answer.ratings}</p>
              <button
                    onClick={() =>
                      incrementRatingLocally(answer._id, authToken)
                    }
                  >
                    Rate
                  </button>
            </div>
          ))}
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
                           <button onClick={() => postAnswer(selectedItem._id, newAnswer, authToken)}>Post</button>

                       </ModalContent>
                   </Modal>
               )}
    </QuestionBox>
  )}
</FAQContainer>

    </>
  );
};
export default QuestionDetail;