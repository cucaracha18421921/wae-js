import SearchUI from "./SearchUI";
import {mount} from "enzyme";
import React from "react";

describe('Test SearchUI Component', ()=>{
  const submitSearchMock = jest.fn();
  const component = mount(<SearchUI submitSearch={submitSearchMock}/>);
  const autoFilterSwitchComponent = component.find('[data-test-id="AutoFilterSwitch"]').at(0);
  const searchInputComponent = component.find('[data-test-id="SearchInput"]').at(0);

  test('if autoFilter switch is false, the submit button appears',()=>{
    expect(component.find('button')).toBeTruthy();
  });

  test('if autoFilter switch is true, the submit button disappears',()=>{
    autoFilterSwitchComponent.simulate('change');
    expect(component.find('button').length).toEqual(0);
  });

  test('if autofilter switches back to true submits written text on searchInput',()=>{
    searchInputComponent.simulate('change',{target:{value:'SearchText'}});
    autoFilterSwitchComponent.simulate('change');
    autoFilterSwitchComponent.simulate('change');
    expect(component.find('button')).toBeTruthy();
    expect(submitSearchMock).toBeCalledWith('SearchText');
  });

  test('test if SearchInput change event submitsSearch if autoFilter is enabled',()=>{
    autoFilterSwitchComponent.simulate('change');
    searchInputComponent.simulate('change',{target:{value:'SearchText'}});
    expect(submitSearchMock).toBeCalledWith('SearchText');
  });
});
