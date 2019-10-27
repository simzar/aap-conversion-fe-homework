import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

const Table = ({ columns, data }) => (
  <ReactTable data={data} columns={columns} filterable />
);

Table.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default Table;
