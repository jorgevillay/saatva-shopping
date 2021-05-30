import { css } from '@emotion/react';
import colors from './colors';

const globalStyles = css`
  body {
    background-color: ${colors.background};
    font-family: 'Questrial', sans-serif;
    font-size: 16px;
    margin: 0;
    height: 100%;
  }

  h1, h5, h5 {
    margin: 0;
  }
`;

export default globalStyles;
