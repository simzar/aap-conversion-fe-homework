import { connect } from 'react-redux';
import CampaignsList from './CampaignsList';
import { fetchUsers } from '../../state/users/usersActions';

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignsList);
