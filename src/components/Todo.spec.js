import {mount, shallow} from "enzyme";
import React from "react";
import Todo from "./Todo";
import {HighlightedText} from "./uiComponents";

describe('Rendering todo items', () => {
  const mockClickFunction = jest.fn();
  const wrapper = shallow(<Todo key={'todo'} onClick={mockClickFunction} completed={true} text={'search text'} highlightText={'search'}/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have textDecoration linethrough when task is completed',()=>{
    expect(wrapper.get(0).props.style.textDecoration).toEqual('line-through');
  });

  it('should have no linethrough when task is active',()=>{
    const wrapper = shallow(<Todo key={'todo'} onClick={mockClickFunction} completed={false} text={'search text'} highlightText={'search'}/>);
    expect(wrapper.get(0).props.style.textDecoration).toEqual('none');
  });

  it('should highlight text when is a searchKey',()=>{
    const wrapper = mount(<Todo key={'todo'} onClick={mockClickFunction} completed={false} text={'search'} highlightText={'search'}/>);
    const yellowTextWrapper = mount(<HighlightedText>{'search'}</HighlightedText>);
    expect(yellowTextWrapper.find('a').props().className).toEqual(wrapper.find('a').props().className);
  })
});
