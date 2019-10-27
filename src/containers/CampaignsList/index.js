import { connect } from 'react-redux';
import CampaignsList from './CampaignsList';
import { fetchUsers } from '../../state/users/usersActions';
import { loadCampaigns } from '../../state/campaigns/campaignsActions';

const mapStateToProps = (state) => ({
  campaigns: state.campaigns.campaigns,
  users: state.users.users,
});

const mapDispatchToProps = {
  fetchUsers,
  loadCampaigns,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignsList);
