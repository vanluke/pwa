import styled from 'styled-components';
import {Cell} from './timeswire';
import {aliceblue} from 'styles/palette';

export const Container = styled.section`
  position: relative;
`;

export const Grid = styled.div`
  article {
    border-bottom: 1px solid rgba(211, 211, 211, .7);
    transition: 2s all easy;

    &:hover {
      font-size: 120%;
      background: ${aliceblue};
    }
  }

  article:last-child {
    border-bottom: none;
  }
`;
