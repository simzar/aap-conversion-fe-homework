import React from 'react';
import ReactTable from 'react-table';
import { mount } from 'enzyme';
import Table from '../Table';

describe('Table', () => {
  const defaultProps = {
    data: [],
    columns: [],
    isLoading: false,
    isError: false,
    loadingText: 'loading',
    noDataText: 'no data',
  };

  const createWrapper = (props = {}) => mount(<Table {...defaultProps} {...props} />);

  it('should render component without loading state', () => {
    const wrapper = createWrapper();

    expect(wrapper.find(ReactTable).exists()).toEqual(true);
    const loaderComponent = wrapper.find('.-loading');

    expect(loaderComponent.prop('className').includes('-active')).toEqual(
      false,
    );
  });

  it('should render loading state', () => {
    const wrapper = createWrapper({ isLoading: true });
    const loaderComponent = wrapper.find('.-loading');

    expect(loaderComponent.prop('className').includes('-active')).toEqual(true);
  });

  it('should render loader in error case', () => {
    const wrapper = createWrapper({ isError: true });
    const loaderComponent = wrapper.find('.-loading');

    expect(loaderComponent.prop('className').includes('-active')).toEqual(true);
  });
});
