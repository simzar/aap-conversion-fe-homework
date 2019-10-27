import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './DatePicker.scss';

const DatePickerComponent = ({ startDate, setDate }) => (
  <DatePicker selected={startDate} onChange={(date) => setDate(date)} />
);

DatePickerComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  startDate: PropTypes.string,
  setDate: PropTypes.func.isRequired,
};

DatePickerComponent.defaultProps = {
  startDate: undefined,
};

export default DatePickerComponent;
