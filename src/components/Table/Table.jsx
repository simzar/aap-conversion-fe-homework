import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import 'react-table/react-table.css';

const columns = [
  'column.name',
  'column.startDate',
  'column.endDate',
  'column.Budget',
  'column.userName',
];

const Table = ({ data, intl }) => {
  const translatedColumns = columns.map((id) => ({
    Header: intl.formatMessage({ id }),
    accessor: id.split('.').pop(),
  }));

  return <ReactTable data={data} columns={translatedColumns} />;
};

Table.propTypes = {
  intl: PropTypes.shape(IntlProvider.propTypes).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default Table;
