import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '.';

describe('Login Form', () => {
  const event = { preventDefault: () => { } };
  const mockOnFormSubmit = jest.fn((username, password) => { });
  const wrapper = shallow(<LoginForm onFormSubmit={mockOnFormSubmit} showError />);

  beforeEach(() => {
    jest.spyOn(event, 'preventDefault');
  });

  it('should login', () => {
    expect(wrapper.instance().props.showError).toEqual(true);

    wrapper.setState({ username: 'jason', password: 'watson' });

    wrapper.find('Form').dive().find('form').simulate('submit', event);
    // expect an event to have fired
    expect(mockOnFormSubmit).toHaveBeenCalledWith('jason', 'watson');

    expect(wrapper.find('Error')).toHaveLength(1);
  });
});
