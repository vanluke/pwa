import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {getImageUrl} from 'timeswire/utils/get-media';
import {
  Cell,
  Picture,
  Category,
  Title,
  Meta,
  Time,
  At,
  Grid,
} from './timeswire.styled';

const Timeswire = ({
  title,
  section,
  abstract,
  multimedia,
  thumbnailStandard,
  createdDate,
  byline,
}) => (<Cell>
  <Meta>
    <Picture
      src={thumbnailStandard}
      srcset={`${getImageUrl(multimedia, 1) && getImageUrl(multimedia, 2)} 2000w`}
      alt={abstract}
    />
    <Category>{byline}</Category>
  </Meta>
  <Grid>
    <Title>{title}</Title>
    <Meta>
      <Time>{moment(createdDate).format('MMMM Do YYYY')}</Time>
      <At>{section}</At>
    </Meta>
  </Grid>
</Cell>);

Timeswire.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  thumbnailStandard: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  multimedia: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
  ]),
  
};

Timeswire.defaultProps = {
  multimedia: [],
};

export default Timeswire;
