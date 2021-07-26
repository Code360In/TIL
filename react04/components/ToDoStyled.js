import styled from 'styled-components'

export const Button = styled.button`
  font-size: 18px;
  width: 100px;
  height: 25px;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 8px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 18px;
`;

// 특징: STYLED-COMPONENT는 속성을 받아서 처리할 수 있다
// ${} 안에는 콜백을 넣게 되어있음.
export const ToDoContent = styled.span`
  color: ${props => props.isDone? 'gray' : 'black'};
  text-decoration: ${props => props.isDone? 'line-through' : 'none'};
  cursor: pointer;
`;

export const ToDoXButton = styled.span`
  color: ${props => props.isFinished? 'gray' : 'tomato'};
  background-color: ${props => props.isFinished? 'black' : 'ivory'};
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
`;