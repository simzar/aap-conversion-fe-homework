import React from 'react';
import classnames from 'classnames';
import { IntlProvider } from 'react-intl';
import styles from './app.scss';
import DEFAULT_TRANSLATIONS from '../../lang/en.json';
import Table from '../../components/Table';

const cx = classnames.bind(styles);

function App() {
  const { translations } = DEFAULT_TRANSLATIONS;

  return (
    <IntlProvider locale="en" messages={translations}>
      <div className={cx('app')}>
        <Table />
      </div>
    </IntlProvider>
  );
}

export default App;
