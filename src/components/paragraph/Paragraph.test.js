import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

it('renders Paragraph', () => {
  const wrapper = shallow(<Paragraph />);
  expect(wrapper).toMatchSnapshot();
});