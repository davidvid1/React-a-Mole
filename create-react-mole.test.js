import React from 'react';

import create-react-mole from './index';

describe('create-react-mole', () => {
  test('should render component', () => {
    expect(create-react-mole.toJSON())
      .toMatchSnapshot();
  });
});