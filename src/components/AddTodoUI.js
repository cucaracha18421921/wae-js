import styled from "styled-components";
import PropTypes from 'prop-types';
import {Button, Input} from "./uiComponents";
import React, {useState} from "react";

const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const TodoInput = styled(Input)`
  width: 600px;
`;

const TodoButton = styled(Button)`
  margin-left: 20px;
`;

function AddTodoUI({submitToDo}){
  const [todo, setTodo] = useState('');
  return (
      <AddTodoContainer>
        <TodoInput value={todo}
          onChange={(event)=>{
            setTodo(event.target.value)
          }}
           onKeyDown={({keyCode})=>{
             if(keyCode === 13){
               submitToDo(todo);
               setTodo('');
             }
           }}
        />
        <TodoButton onClick={()=>{
          submitToDo(todo);
          setTodo('');
        }}
        >
          Add Todo
        </TodoButton>
      </AddTodoContainer>
  )
}

AddTodoUI.propTypes = {
  submitToDo: PropTypes.func.isRequired,
};

export default AddTodoUI;
