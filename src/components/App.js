import React from 'react'
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import SearchTodo from '../containers/SearchTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 25px;
`;

const App = () => (
  <AppContainer>
    <AddTodo />
    <FiltersContainer>
      <SearchTodo />
      <Filters />
    </FiltersContainer>
    <VisibleTodoList />
  </AppContainer>
)

export default App
