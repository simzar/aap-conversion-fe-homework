import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './Flag.scss';

const Flag = ({ isActive, labelTrue, labelFalse }) => {
  const labelId = isActive ? labelTrue : labelFalse;
  const className = isActive ? 'active' : 'inactive';

  return (
    <div className={`label label--${className}`}>
      <FormattedMessage id={labelId} />
    </div>
  );
};

Flag.propTypes = {
  isActive: PropTypes.bool.isRequired,
  labelTrue: PropTypes.string.isRequired,
  labelFalse: PropTypes.string.isRequired,
};

export default Flag;
