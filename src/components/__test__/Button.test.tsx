import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('should render', () => {
    const buttonEl = shallow(<Button>Test</Button>);
    expect(buttonEl).toMatchSnapshot();
  });

  it('should render children as text', () => {
    const buttonEl = shallow(<Button>Test</Button>);
    expect(buttonEl.text()).toEqual('Test');
  });
});
