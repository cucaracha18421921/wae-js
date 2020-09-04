import React from 'react';
import {shallow} from "enzyme";
import Filters from "./Filters";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Filters />);
});

describe('Filters rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
