import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';
import campaigns from '../../components/Table/data';

class CampaignsList extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    // eslint-disable-next-line no-console
    const campaignsToRender = campaigns.map((campaign) => ({
      ...campaign,
      userName:
        campaign.userId in users ? users[campaign.userId] : 'Unknown user',
    }));

    return <Table data={campaignsToRender} />;
  }
}

CampaignsList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.object.isRequired,
};

export default CampaignsList;
