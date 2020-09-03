import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import styled from 'styled-components';
import {Button, Input} from "../components/uiComponents";

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

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <AddTodoContainer>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        <TodoInput ref={node => input = node} />
        <TodoButton type="submit">
          Add Todo
        </TodoButton>
      </form>
    </AddTodoContainer>
  )
}

export default connect()(AddTodo)
