import {shallow} from "enzyme";
import Link from "./Link";
import React from "react";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Link active={true} onClick={()=>{}} children={[]} />);
});

describe('Link rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
