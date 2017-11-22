import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/spinner';
import Timeswire from './timeswire';
import {Container, Grid} from './timeswires.styled';

const Timeswires = ({timeswires, isBussy}) =>
  (<Container>
    {isBussy && (<Spinner />)}
    <Grid>{timeswires.map(t => (<Timeswire {...t} key={t.slugName} />))}</Grid>
  </Container>);

Timeswires.propTypes = {
  timeswires: PropTypes.arrayOf(PropTypes.shape({
    slugName: PropTypes.string,
  })).isRequired,
  isBussy: PropTypes.bool,
};

Timeswires.defaultProps = {
  isBussy: false,
};

export default Timeswires;
