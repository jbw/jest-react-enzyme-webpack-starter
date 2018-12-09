import React from 'react';
import { mount } from 'enzyme';

import LoginContainer from '.';

jest.mock('../../services/auth');

describe('Login Form', () => {
  const wrapper = mount(<LoginContainer />);

  it('should login', async () => {
    await wrapper.instance().handleSubmit('jason', 'watson');

    expect(wrapper.state('hasLoginError')).toEqual(false);
  });

  it('should fail login', async () => {
    await wrapper.instance().handleSubmit('', '');

    expect(wrapper.state('hasLoginError')).toEqual(true);
  });
});
