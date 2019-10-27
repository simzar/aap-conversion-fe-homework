import React from 'react';
import classnames from 'classnames';
import { FormattedMessage, IntlProvider } from 'react-intl';
import logo from '../../logo.svg';
import styles from './app.scss';
import DEFAULT_TRANSLATIONS from '../../lang/en.json';

const cx = classnames.bind(styles);

function App() {
  const { translations } = DEFAULT_TRANSLATIONS;

  return (
    <IntlProvider locale="en" messages={translations}>
      <div className={cx('app')}>
        <header className={cx('app-header')}>
          <img src={logo} className={cx('app-logo')} alt="logo" />
          <p>
            <FormattedMessage id="test.message" />
          </p>
          <a
            className={cx('app-link')}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
