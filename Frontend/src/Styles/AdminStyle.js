import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ActionButton = styled.button`
  margin-left: 10px;
  padding: 5px 15px;
  border: none;
  background-color: ${(props) => {
    if (props.actionType === "ban") return "#FF0000";
    if (props.actionType === "unban") return "#28A745";
    if (props.actionType === "delete") return "#FF0000";
    return "#007BFF";
  }};
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => {
      if (props.actionType === "ban") return "#C43F00";
      if (props.actionType === "unban") return "#218838";
      if (props.actionType === "delete") return "#C00000";
      return "#0056b3";
    }};
  }

  @media (max-width: 768px) {
    display: block;
    margin-left: 0;
    margin-top: 5px;
  }
`;

export const DataList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const DataItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e1e1e1;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
