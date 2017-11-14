import styled, {keyframes} from 'styled-components';
import {coral} from 'styles/palette';
import {zIndex} from 'styles/constants';

const spinnerBackground = 'rgba(255, 127, 80, .7)';

const roll = keyframes`
  0% {
    transform: rotate(180deg);
  }
  
  40% {
    transform: rotate(180deg);
  }
  
  60% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const fill = keyframes`
  0% {
    height: 0px;
  }
  
  40% {
    height: 75px;
  }
  
  60% {
    height: 75px;
  }
  
  100% {
    height: 0px;
  }
`;

export const InnerBox = styled.div`
  background: white;
  height: 20px;
  animation: ${fill} 2s infinite ease-in;
`;

export const Box = styled.div`
  margin: 100px auto;
  height: 75px;
  width: 75px;
  border: 10px solid white;
  transform: rotate(180deg);
  animation: ${roll} 2s infinite ease-out;
  background: ${spinnerBackground};
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  z-index: ${zIndex.top};
  background: ${spinnerBackground};
`
