import { campaignsSchema, CAMPAIGNS_SET } from './campaignsModel';

const setCampaigns = (campaigns) => ({
  type: CAMPAIGNS_SET,
  payload: campaigns,
});

// eslint-disable-next-line import/prefer-default-export
export const loadCampaigns = (campaigns) => async (dispatch) => {
  try {
    const validationPromises = campaigns.map((campaign) => campaignsSchema.validate(campaign));
    await Promise.all(validationPromises);

    const validDateCampaigns = campaigns.filter(
      (campaign) => new Date(campaign.startDate) <= new Date(campaign.endDate),
    );
    dispatch(setCampaigns(validDateCampaigns));
  } catch (e) {
    /* eslint-disable no-console */
    console.error(e.message);
    if (e.value) {
      console.error('Campaign that failed validation: ', e.value);
    } else {
      console.error('Please provide a valid array of campaigns');
      /* eslint-enable */
    }
  }
};
