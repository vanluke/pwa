import React from 'react';
import {InnerBox, Box, Overlay} from './spinner.styled';

const Spinner = () => (<Overlay>
  <Box>
    <InnerBox />
  </Box>
</Overlay>);

export default Spinner;
