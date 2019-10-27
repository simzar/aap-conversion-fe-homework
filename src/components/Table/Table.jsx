import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import 'react-table/react-table.css';
import campaigns from './data';

const columns = [
  'column.name',
  'column.startDate',
  'column.endDate',
  'column.Budget',
  'column.userId',
];

const Table = ({ intl }) => {
  const translatedColumns = columns.map((id) => ({
    Header: intl.formatMessage({ id }),
    accessor: id.split('.').pop(),
  }));

  return <ReactTable data={campaigns} columns={translatedColumns} />;
};

Table.propTypes = {
  intl: PropTypes.shape(IntlProvider.propTypes).isRequired,
};

export default Table;
