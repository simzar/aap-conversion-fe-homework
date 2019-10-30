import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import matchSorter from 'match-sorter';
import numeral from 'numeral';
import Table from '../../components/Table';
import DatePicker from '../../components/DatePicker';
import Flag from '../../components/Flag';

class CampaignsList extends Component {
  constructor(props) {
    super(props);

    this.addCampaigns = this.addCampaigns.bind(this);
    this.mapCampaigns = this.mapCampaigns.bind(this);
    this.constructColumns = this.constructColumns.bind(this);
    this.selectStartDate = this.selectStartDate.bind(this);

    this.state = { startDate: null };
  }

  componentDidMount() {
    window.AddCampaigns = this.addCampaigns;
  }

  componentWillUnmount() {
    window.AddCampaigns = null;
  }

  addCampaigns(campaigns) {
    const { loadCampaigns, fetchUsers, users } = this.props;

    // eslint-disable-next-line no-unused-expressions
    Object.entries(users).length > 0 || fetchUsers();
    loadCampaigns(campaigns);
  }

  mapCampaigns() {
    const {
      campaigns,
      users,
      intl: { formatMessage },
    } = this.props;
    const currentDate = Date.now();

    return campaigns.map((campaign) => ({
      ...campaign,
      userName:
        campaign.userId in users
          ? users[campaign.userId]
          : formatMessage({ id: 'users.unknownUser' }),
      isActive:
        currentDate >= new Date(campaign.startDate)
        && currentDate <= new Date(campaign.endDate),
    }));
  }

  constructColumns() {
    const {
      intl: { formatMessage },
      campaigns,
    } = this.props;
    const { startDate } = this.state;

    return [
      {
        Header: formatMessage({ id: 'column.name' }),
        accessor: 'name',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['name'] }),
        filterAll: true,
      },
      {
        Header: formatMessage({ id: 'column.userName' }),
        accessor: 'userName',
        filterable: false,
      },
      {
        Header: formatMessage({ id: 'column.startDate' }),
        accessor: 'startDate',
        Filter: ({ filter, onChange }) => (
          <DatePicker
            startDate={filter ? filter.value : undefined}
            disabled={campaigns.length === 0}
            setDate={(value) => this.selectStartDate(onChange, value)}
            placeholder={formatMessage({ id: 'column.startDate' })}
          />
        ),
        // eslint-disable-next-line max-len
        filterMethod: (filter, row) => !filter || !filter.value || new Date(row.startDate) >= filter.value,
      },
      {
        Header: formatMessage({ id: 'column.endDate' }),
        accessor: 'endDate',
        Filter: ({ filter, onChange }) => (
          <DatePicker
            startDate={filter ? filter.value : undefined}
            setDate={onChange}
            minDate={startDate}
            disabled={startDate === null}
            placeholder={formatMessage({
              id:
                startDate === null
                  ? 'endDate.disabled.placeholder'
                  : 'column.endDate',
            })}
          />
        ),
        // eslint-disable-next-line max-len
        filterMethod: (filter, row) => !filter || !filter.value || new Date(row.endDate) <= filter.value,
      },
      {
        Header: formatMessage({ id: 'column.isActive' }),
        accessor: 'isActive',
        filterable: false,
        Cell: (row) => Flag({
          isActive: row.value,
          labelTrue: 'isActive.value.yes',
          labelFalse: 'isActive.value.no',
        }),
      },
      {
        Header: formatMessage({ id: 'column.budget' }),
        accessor: 'budget',
        filterable: false,
        Cell: (row) => numeral(row.value).format('($ 0.00 a)'),
      },
    ];
  }

  selectStartDate(onChange, startDate) {
    this.setState({ startDate }, () => onChange(startDate));
  }

  render() {
    const {
      isLoading,
      isError,
      intl: { formatMessage },
      campaigns,
    } = this.props;
    const data = this.mapCampaigns();
    const columns = this.constructColumns();
    const loadingText = formatMessage({
      id: isError ? 'users.fetchError' : 'users.loading',
    });
    const noDataText = formatMessage({
      id:
        campaigns.length === 0
          ? 'campaigns.noData'
          : 'campaigns.noFilteredData',
    });

    return (
      <Table
        columns={columns}
        data={data}
        isLoading={isLoading}
        isError={isError}
        loadingText={loadingText}
        noDataText={noDataText}
      />
    );
  }
}

CampaignsList.propTypes = {
  campaigns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      budget: PropTypes.number.isRequired,
      userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  loadCampaigns: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  intl: PropTypes.shape(IntlProvider.propTypes).isRequired,
};

export default CampaignsList;
