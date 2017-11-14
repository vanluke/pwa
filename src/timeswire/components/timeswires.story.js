import React from 'react';
import {storiesOf} from '@storybook/react';
import ck from 'camelcase-keys';
import Timeswires from './timeswires';
import data from './timeswire-response.mock.json';

const props = {
  timeswires: data.map(e => ck(e, {deep: true})),
};

storiesOf('Timeswires')
  .add('Default', () => (
    <Timeswires {...props} />
  ))
  .add('Loading', () => (
    <Timeswires {...props} isBussy />
  ));
