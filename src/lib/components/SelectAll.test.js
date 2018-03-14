

import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectAll from './SelectAll';

Enzyme.configure({adapter: new Adapter()});


describe('SelectAll component', () => {
  const mockItems = [1,2,3,4,5];

  test('it renders without throwing an error', () => {
    const wrapper = shallow(<SelectAll items={mockItems} itemsSelected={0} />)

    expect(wrapper.find('.SelectAll').length).toBe(1);
  });

  test('it is not checked when itemsSelected prop is 0', () => {
    const wrapper = shallow(<SelectAll items={mockItems} itemsSelected={0} />)

    expect(wrapper.prop('checked')).toBe(false);
  });

  test('it is not checked when itemsSelected prop is less than length of items', () => {
    const wrapper = shallow(<SelectAll items={mockItems} itemsSelected={3} />)

    expect(wrapper.prop('checked')).toBe(false);
    expect(wrapper.state('isChecked')).toBe(false);
  });

  test('it is checked when itemsSelected prop is equal to length of items', () => {
    const wrapper = shallow(<SelectAll items={mockItems} itemsSelected={5} />)

    expect(wrapper.prop('checked')).toBe(true);
    expect(wrapper.state('isChecked')).toBe(true);
    expect(wrapper.state('isIndeterminate')).toBe(false);
  });

  test('it is indeterminite when itemsSelected prop is less than length of items', () => {
    const wrapper = shallow(<SelectAll items={mockItems} itemsSelected={2} />)

    expect(wrapper.prop('checked')).toBe(false);
    expect(wrapper.state('isIndeterminate')).toBe(true);
  });

  test('it invoked onChange prop when clicked', () => {
    let called = false;
    const mockChangeHandler = () => {
      called = true;
      return;
    }
    const wrapper = mount(<SelectAll items={mockItems} itemsSelected={2} onChange={mockChangeHandler} />)

    expect(called).toBe(false);
    wrapper.find('.SelectAll').simulate('change');
    expect(called).toBe(true);
  });

});
