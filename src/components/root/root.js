import React from 'react';
import PropTypes from 'prop-types';
import Container from './root.styled';

const Root = ({children}) => (<Container>{children}</Container>);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Root;
