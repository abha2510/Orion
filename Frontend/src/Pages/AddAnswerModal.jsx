import { useState } from "react";

function AddAnswerModal({ showModal, onClose, onSubmit }) {
    const [answerText, setAnswerText] = useState("");
    if(!showModal) return null; 
    // ... inside handleAnswerSubmit or equivalent function
// const response = await axios.post(
//     `https://bewildered-suspenders-clam.cyclic.app/questions/${questionId}/answers`,
//     { text: answerText },
//     { headers: { 'Authorization': `Bearer ${authToken}` } }
//   );
  
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Add an Answer</h3>
          <textarea
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            placeholder="Enter your answer here..."
          />
          <button onClick={() => onSubmit(answerText)}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
        <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 500px;
        }
      `}</style>
      </div>
    );
  }
  
  export default AddAnswerModal;
  