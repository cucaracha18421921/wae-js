import {mount} from "enzyme";
import AddTodoUI from "./AddTodoUI";
import React from "react";

describe(' Test Add to do UI element',()=>{

  const submitToDoMock = jest.fn();
  const component = mount(<AddTodoUI submitToDo={submitToDoMock}/>);

  test('test if input updates local state',()=>{
    component.find('input').simulate('change',{target:{value:'Test Value'}});
    expect(component.find('input').props().value).toEqual('Test Value');
  });

  test('test if input submitsTodo on hit enter',()=>{
    component.find('input').simulate('change',{target:{value:'Test Value'}});
    component.find('input').simulate('keydown',{keyCode:13});
    expect(submitToDoMock).toHaveBeenCalledWith('Test Value');
    expect(component.find('input').props().value).toEqual('');
  });

  test('test if button submitsTodo',()=>{
    component.find('input').simulate('change',{target:{value:'Test Value'}});
    component.find('button').simulate('click');
    expect(submitToDoMock).toHaveBeenCalledWith('Test Value');
    expect(component.find('input').props().value).toEqual('');
  });
});
