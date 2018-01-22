import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('button behaviour', () => {
  it('renders Button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should execute the onClick function', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button onClick={onClick}/>)
    wrapper.find('button').simulate('click')
    expect(onClick).toBeCalled()
  })
})