import React from 'react';
import {shallow} from "enzyme";
import TodoList from "../containers/VisibleTodoList";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

let wrapper;
const mockStore = configureStore([]);

beforeEach(() => {
  wrapper = shallow(
      <Provider store={mockStore({})}>
        <TodoList todos={[{id:0,text:'todo1'}]} />
      </Provider>
    );
});

describe('Filters rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
