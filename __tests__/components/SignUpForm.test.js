import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../../components/SignUpForm';

describe('SignUpForm', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
