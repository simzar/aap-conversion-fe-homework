import React from 'react';
import ReactTable from 'react-table';
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

// const columns = [
//   {
//     Header: 'Name',
//     accessor: 'name',
//   },
//   {
//     Header: 'Age',
//     accessor: 'age',
//   },
// ];

const columnsToTranslate = ['column.name', 'column.age'];

// eslint-disable-next-line react/prop-types
const Table = ({ intl }) => {
  const translatedColumns = columnsToTranslate
    // eslint-disable-next-line react/prop-types
    .map((id) => ({ Header: intl.formatMessage({ id }), accessor: id }));

  return <ReactTable data={data} columns={translatedColumns} />;
};

export default Table;
