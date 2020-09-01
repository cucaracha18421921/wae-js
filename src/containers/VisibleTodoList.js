import { connect } from 'react-redux'
import {TextFilters, toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const highlightSearchText = (todo,highlightText) => ({...todo,highlightText})

const mapStateToProps = state => {
  let {todos: result} = state;
  if(state.searchFilter !== ''){
    const {searchFilter} = state;
    result = state.todos
        .filter(todo=> todo.text.indexOf(searchFilter) !== -1)
        .map(todo=>highlightSearchText(todo,searchFilter));
  }
  return {
    todos: getVisibleTodos(result, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
