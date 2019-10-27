import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import 'react-table/react-table.css';

const data = [
  {
    name: 'Tanner Linsley',
    age: 26,
  },
  {
    name: 'Josh Peterson',
    age: 30,
  },
];

const columnsToTranslate = ['column.name', 'column.age'];

const Table = ({ intl }) => {
  const translatedColumns = columnsToTranslate.map((id) => ({
    Header: intl.formatMessage({ id }),
    accessor: id.split('.').pop(),
  }));

  return <ReactTable data={data} columns={translatedColumns} />;
};

Table.propTypes = {
  intl: PropTypes.shape(IntlProvider.propTypes).isRequired,
};

export default Table;
