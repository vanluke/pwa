import styled, {injectGlobal} from 'styled-components';
import Raleway from 'assets/fonts/Raleway-Regular.ttf';
import RalewayBold from 'assets/fonts/Raleway-Bold.ttf';

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayBold}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway';
    font-weight: bold;
    src: url(${RalewayBold}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.main`
  position: relative;
  font-size: medium;
  font-family: 'Raleway';
`;

export default Container;
