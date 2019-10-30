import React from 'react';
import { IntlProvider } from 'react-intl';
import DEFAULT_TRANSLATIONS from '../../lang/en.json';
import CampaignsList from '../CampaignsList';
import './app.scss';

function App() {
  const { translations } = DEFAULT_TRANSLATIONS;

  return (
    <IntlProvider locale="en" messages={translations}>
      <div className="app">
        <CampaignsList />
      </div>
    </IntlProvider>
  );
}

export default App;
