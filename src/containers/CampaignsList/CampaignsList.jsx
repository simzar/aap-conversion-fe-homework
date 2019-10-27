import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';

class CampaignsList extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    // eslint-disable-next-line no-console
    console.log(users);

    return <Table />;
  }
}

CampaignsList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.object.isRequired,
};

export default CampaignsList;
