import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoUI from "../components/AddTodoUI";

const mapStateToProps = (state = {}) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  submitToDo: text => {
    if(text === ''){
      return;
    }
    dispatch(addTodo(text))
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(AddTodoUI)
