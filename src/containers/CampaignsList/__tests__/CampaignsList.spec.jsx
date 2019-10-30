import React from 'react';
import { shallow } from 'enzyme';
import CampaignsList from '../CampaignsList';

describe('CampaignsList', () => {
  const fetchUsers = jest.fn();
  const loadCampaigns = jest.fn();
  const defaultProps = {
    campaigns: [],
    users: {},
    isLoading: false,
    isError: false,
    fetchUsers,
    loadCampaigns,
    intl: { formatMessage: jest.fn().mockReturnValue('text') },
  };

  const createWrapper = (props = {}) => shallow(<CampaignsList {...defaultProps} {...props} />);

  beforeEach(() => {
    fetchUsers.mockReset();
    loadCampaigns.mockReset();
  });

  describe('mount', () => {
    it('should set AddCampaigns method to window when mounted', () => {
      expect(global.window.AddCampaigns).toBeFalsy();

      createWrapper();

      expect(global.window.AddCampaigns).toBeTruthy();
    });

    it('should remove AddCampaigns method from window when unmounted', () => {
      const wrapper = createWrapper();
      expect(global.window.AddCampaigns).toBeTruthy();

      wrapper.unmount();

      expect(global.window.AddCampaigns).toBeFalsy();
    });
  });

  describe('addCampaigns', () => {
    it('should call loadCampaigns and fetchUsers when no users are loaded', () => {
      const wrapper = createWrapper();
      const instance = wrapper.instance();

      instance.addCampaigns([]);

      expect(loadCampaigns).toHaveBeenCalledTimes(1);
      expect(fetchUsers).toHaveBeenCalledTimes(1);

      instance.addCampaigns([]);

      expect(loadCampaigns).toHaveBeenCalledTimes(2);
      expect(fetchUsers).toHaveBeenCalledTimes(2);
    });

    it('should not call fetchUsers when they are loaded', () => {
      const wrapper = createWrapper({ users: { user: 'a user' } });
      const instance = wrapper.instance();

      instance.addCampaigns([]);

      expect(loadCampaigns).toHaveBeenCalledTimes(1);
      expect(fetchUsers).toHaveBeenCalledTimes(0);
    });
  });

  describe('mapCampaigns', () => {
    const pastDate = '2/21/1900';
    const futureDate = '2/21/3000';
    const users = {
      1: 'user name one',
      2: 'user name two',
    };
    const formatMessage = jest.fn().mockReturnValue('unknown');
    const campaigns = [
      {
        userId: 1,
        id: 1,
        name: '1',
        startDate: pastDate,
        endDate: futureDate,
        budget: 1,
      },
      {
        userId: 2,
        id: 2,
        name: '2',
        startDate: pastDate,
        endDate: pastDate,
        budget: 2,
      },
      {
        userId: 3,
        id: 3,
        name: '3',
        startDate: futureDate,
        endDate: futureDate,
        budget: 3,
      },
    ];

    it('should map campaigns with users and determine whether they are active', () => {
      const wrapper = createWrapper({
        users,
        campaigns,
        intl: { formatMessage },
      });
      const instance = wrapper.instance();

      const result = instance.mapCampaigns();

      expect(result).toEqual([
        {
          userName: 'user name one',
          userId: 1,
          id: 1,
          name: '1',
          startDate: pastDate,
          endDate: futureDate,
          budget: 1,
          isActive: true,
        },
        {
          userName: 'user name two',
          userId: 2,
          id: 2,
          name: '2',
          startDate: pastDate,
          endDate: pastDate,
          budget: 2,
          isActive: false,
        },
        {
          userName: 'unknown',
          userId: 3,
          id: 3,
          name: '3',
          startDate: futureDate,
          endDate: futureDate,
          budget: 3,
          isActive: false,
        },
      ]);
      expect(formatMessage).toHaveBeenCalledWith({ id: 'users.unknownUser' });
    });
  });
});
