import { mapStateToProps } from "./VisibleTodoList";
import { VisibilityFilters } from "../actions";

describe('todoList Redux Container test',() => {
  const todos = [
    {text:'searchTest',id:0, completed: false},
    {text:'no-search-Text', id:1, completed: true},
    {text: 'search-search',id:2, completed:true},
    {text:'todo1',id:3,completed:true},
    {text:'todo2',id:4,completed:false},
    {text:'todo3',id:5, completed:false},
  ];

  it('should filter todos by searchText on all todos',()=>{
    const searchFilter = 'search';
    const highlightText = searchFilter;
    const initialState = {
      searchFilter,
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos,
    };
    const resultState = {
      todos: [
          {text:'searchTest',id:0,completed:false, highlightText},
          {text:'no-search-Text', id:1, completed: true, highlightText},
          {text: 'search-search',id:2, completed:true, highlightText},
      ]
    }
    expect(mapStateToProps(initialState))
        .toEqual(resultState)
  })
  it('should filter todos by searchText on completed todos',()=>{
    const searchFilter = 'search';
    const highlightText = searchFilter;
    const initialState = {
      searchFilter,
      visibilityFilter: VisibilityFilters.SHOW_COMPLETED,
      todos,
    };
    const resultState = {
      todos: [
        {text:'no-search-Text', id:1, completed: true, highlightText},
        {text: 'search-search',id:2, completed:true, highlightText},
      ]
    }
    expect(mapStateToProps(initialState))
        .toEqual(resultState)
  })

  it('should filter todos by searchText on active todos',()=>{
    const searchFilter = 'search';
    const highlightText = searchFilter;
    const initialState = {
      searchFilter,
      visibilityFilter: VisibilityFilters.SHOW_ACTIVE,
      todos,
    };
    const resultState = {
      todos: [
        {text:'searchTest',id:0,completed:false, highlightText},
      ]
    }
    expect(mapStateToProps(initialState))
        .toEqual(resultState)
  })

  it('should not filter todos by searchText on all todos',()=>{
    const searchFilter = '';
    const initialState = {
      searchFilter,
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos,
    };
    const resultState = {
      todos
    }
    expect(mapStateToProps(initialState))
        .toEqual(resultState)
  })

  it('should not filter todos by searchText on active todos',()=>{
    const searchFilter = '';
    const initialState = {
      searchFilter,
      visibilityFilter: VisibilityFilters.SHOW_ACTIVE,
      todos,
    };
    const resultState = {
      todos: [
        {text:'searchTest',id:0, completed: false},
        {text:'todo2',id:4,completed:false},
        {text:'todo3',id:5, completed:false},
      ]
    }
    expect(mapStateToProps(initialState))
        .toEqual(resultState)
  })

  it('should not filter todos by searchText on completed todos',()=>{
    const searchFilter = '';
    const initialState = {
      searchFilter,
      visibilityFilter: VisibilityFilters.SHOW_COMPLETED,
      todos,
    };
    const resultState = {
      todos: [
        {text:'no-search-Text', id:1, completed: true},
        {text: 'search-search',id:2, completed:true},
        {text:'todo1',id:3,completed:true},
      ]
    }
    expect(mapStateToProps(initialState))
        .toEqual(resultState)
  })

})
