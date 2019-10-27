import { CAMPAIGNS_SET } from './campaignsModel';

const setCampaigns = (campaigns) => ({
  type: CAMPAIGNS_SET,
  payload: campaigns,
});

// eslint-disable-next-line import/prefer-default-export
export const loadCampaigns = (campaigns) => (dispatch) => {
  // TODO: validate campaigns
  // for format and date validity
  dispatch(setCampaigns(campaigns));
};
