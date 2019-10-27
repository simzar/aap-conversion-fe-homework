import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';

class CampaignsList extends Component {
  constructor(props) {
    super(props);

    this.addCampaigns = this.addCampaigns.bind(this);
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();

    window.AddCampaigns = this.addCampaigns;
  }

  componentWillUnmount() {
    window.AddCampaigns = null;
  }

  addCampaigns(campaigns) {
    const { loadCampaigns } = this.props;
    loadCampaigns(campaigns);
  }

  render() {
    const { campaigns, users } = this.props;
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
  campaigns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      Budget: PropTypes.number.isRequired,
      userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  loadCampaigns: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.object.isRequired,
};

export default CampaignsList;
