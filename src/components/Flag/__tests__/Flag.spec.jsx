import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import Flag from '../Flag';

describe('Flag', () => {
  const defaultProps = {
    isActive: false,
    labelTrue: 'true',
    labelFalse: 'false',
  };

  const createWrapper = (props = {}) => shallow(<Flag {...defaultProps} {...props} />);

  it('should render true state', () => {
    const wrapper = createWrapper({ isActive: true });

    expect(wrapper.prop('className')).toEqual('label label--active');
    expect(wrapper.find(FormattedMessage).prop('id')).toEqual('true');
  });

  it('should render false state', () => {
    const wrapper = createWrapper();

    expect(wrapper.prop('className')).toEqual('label label--inactive');
    expect(wrapper.find(FormattedMessage).prop('id')).toEqual('false');
  });
});
