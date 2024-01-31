import React from 'react';
import { storiesOf } from '@storybook/react';

import create-react-mole from './index';

storiesOf('create-react-mole', module)
  .add('default state', () => (<create-react-mole />));