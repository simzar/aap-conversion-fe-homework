import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import './Table.scss';

const DEFAULT_PAGE_SIZE = 10;

const Table = ({
  columns,
  data,
  isLoading,
  isError,
  loadingText,
  noDataText,
}) => (
  <ReactTable
    className="-striped -highlight"
    data={isError || data}
    resolveData={data ? () => data : []}
    columns={columns}
    filterable
    sortable={false}
    resizable={false}
    defaultPageSize={DEFAULT_PAGE_SIZE}
    pageSizeOptions={[5, 10, 20, 50, 100]}
    loading={isLoading || isError}
    loadingText={loadingText}
    noDataText={noDataText}
    showPagination={data.length > DEFAULT_PAGE_SIZE}
  />
);

Table.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  loadingText: PropTypes.string.isRequired,
  noDataText: PropTypes.string.isRequired,
};

export default Table;
