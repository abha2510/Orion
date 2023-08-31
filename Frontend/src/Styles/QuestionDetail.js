import styled from "styled-components";

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const QuestionBox = styled.div`
  border: 1px solid black;
  width: 400px;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AnswerSection = styled.div`
  margin-top: 10px;
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
  background: white;
  padding: 20px;
  width: 400px;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CloseModalButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

export const AnswerInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PostButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
