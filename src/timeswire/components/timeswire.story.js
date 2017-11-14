import React from 'react';
import {storiesOf} from '@storybook/react';
// @storybook/cliimport {action} from '@storybook/addon-actions';
import Timeswire from './timeswire';

const props = {
  abstract: 'Here’s what you need to know to start your day.',
  byline: 'By PATRICK BOEHLER',
  createdDate: '2017-11-10T00:00:28-05:00',
  itemType: 'Article',
  kicker: '',
  materialTypeFacet: '',
  publishedDate: '2017-11-10T00:00:28-05:00',
  section: 'Briefing',
  shortUrl: 'https://nyti.ms/2jhQKe9',
  title: 'Donald Trump, Louis C.K., Monsanto: Your Friday Briefing',
  updatedDate: '2017-11-10T00:00:28-05:00',
  url: 'https://www.nytimes.com/2017/11/10/briefing/donald-trump-louis-ck-monsanto.html',
  multimedia: [
    {
      caption: '',
      copyright: '',
      format: 'thumbLarge',
      height: 75,
      width: 75,
      subtype: 'photo',
      type: 'image',
      url: 'https://static01.nyt.com/images/2017/11/10/briefing/10amEuropeBriefing-core-gif-alpha-trypt-container/10amEuropeBriefing-core-gif-alpha-trypt-container-thumbStandard-v2.jpg',
    }, {
      url: 'https://static01.nyt.com/images/2017/11/10/briefing/10amEuropeBriefing-core-gif-alpha-trypt-container/10amEuropeBriefing-core-gif-alpha-trypt-container-thumbLarge-v2.jpg',
      caption: '',
      copyright: '',
      format: 'Standard Thumbnail',
      height: 150,
      width: 150,
      subtype: 'photo',
      type: 'image',
    }, {
      url: 'https://static01.nyt.com/images/2017/11/10/briefing/10amEuropeBriefing-core-gif-alpha-trypt-container/10amEuropeBriefing-core-gif-alpha-trypt-container-superJumbo-v2.jpg',
      caption: '',
      copyright: '',
      format: 'superJumbo',
      height: 188,
      width: 624,
      subtype: 'photo',
      type: 'image',
    },
  ],
};

storiesOf('Timeswire')
  .add('Default', () => (
    <Timeswire {...props} thumbnailStandard={props.multimedia} />
  ));
