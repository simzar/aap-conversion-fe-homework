import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './DatePicker.scss';

const DatePickerComponent = ({
  disabled,
  minDate,
  placeholder,
  startDate,
  setDate,
}) => (
  <DatePicker
    disabled={disabled}
    minDate={minDate}
    placeholderText={placeholder}
    selected={startDate}
    onChange={(date) => setDate(date)}
  />
);

DatePickerComponent.propTypes = {
  disabled: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date),
  setDate: PropTypes.func.isRequired,
};

DatePickerComponent.defaultProps = {
  disabled: false,
  minDate: undefined,
  startDate: undefined,
};

export default DatePickerComponent;
