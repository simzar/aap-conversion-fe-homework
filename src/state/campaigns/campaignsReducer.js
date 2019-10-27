import { CAMPAIGNS_SET } from './campaignsModel';

const initialState = {
  campaigns: [],
};

const campaignsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMPAIGNS_SET: {
      return {
        campaigns: [...state.campaigns, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export default campaignsReducer;
