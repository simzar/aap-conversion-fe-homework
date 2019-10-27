import React from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import styles from './app.scss';

const cx = classnames.bind(styles);

function App() {
  return (
    <div className={cx('app')}>
      <header className={cx('app-header')}>
        <img src={logo} className={cx('app-logo')} alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
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
  );
}

export default App;
