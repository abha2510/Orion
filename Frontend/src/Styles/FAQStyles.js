import styled from 'styled-components';

export const FAQContainer = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;

`;

export const QuestionBlock = styled.div`
    margin-top: 30px;
    border: 0px solid black;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   
`;



export const AddQuestionButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: #ffffff;
    padding: 50px;
    width: 500px;
    border-radius: 10px;
`;

export const QuestionTextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
`;

export const ModalButton = styled.button`
    margin-top: 10px;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;
export const Alert = styled.div`
    background-color: #ffeb3b; //yellow color
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
`;
