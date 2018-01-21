import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders Button without Paragraph', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});