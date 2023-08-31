import { useState } from "react";

function AddQuestionModal({ showModal, onClose, onSubmit }) {
    const [questionText, setQuestionText] = useState("");
    if(!showModal) return null; 
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Add a new Question</h3>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question here..."
          />
          <button onClick={() => onSubmit(questionText)}>Submit</button>
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
  
  export default AddQuestionModal;
  