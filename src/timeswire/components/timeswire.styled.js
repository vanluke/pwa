import styled from 'styled-components';
import {media} from 'styles/media-queries';
import {
  white,
  accent,
} from 'styles/palette';

export const Cell = styled.article`
  position: relative;
  
  ${media.mobile`
    display: grid;
    grid-template-columns: 1fr 5fr;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.mobile`
    grid-template-columns: 4fr 1fr;
  `}
`;

export const Picture = styled.img`
  width: 100%;  
  max-height: 179px;

  ${media.mobile`
    width: calc((.75rem + 1.25vw) * 4);
    max-height: 75px;
  `}
`;

export const Category = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  color: #9b9b9b;
  letter-spacing: 0.15em;
  line-height: 1;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 14px;
  
  ${media.mobile`
    width: calc((.75rem + 1.55vw) * 4);
  `}
`;

export const Title = styled.h3`
  line-height: 1.375;
  transition: all .2s ease;
  max-width: 850px;
  line-height: 1.3;
  letter-spacing: .02em;
  font-weight: bold;
  font-style: italic;
`;

export const Meta = styled.div``;

export const Time = styled.span`
  display: block;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  letter-spacing: .1rem;
  line-height: 1;
`;

export const At = styled.span`
  width: calc((.75rem + 1.25vw) * 4);
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
`;
