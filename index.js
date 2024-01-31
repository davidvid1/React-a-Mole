import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.scss';

const cx = classNames.bind(styles);
class create-react-mole extends React.Component {
  static propTypes = {
  
  };
  
  render() {
    return (
      <div className={cx('create-react-mole')}></div>
    )
  }
};

export default create-react-mole;
