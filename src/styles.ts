/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import bg from 'assets/images/bg.webp';

import { colors } from 'common/consts/colors';

export const globalStyles = css`
  ${emotionReset}

  *, *::before, *::after {
    box-sizing: border-box;
    outline-width: 0;
    appearance: none;
  }

  :root {
    --background: ${colors.white};
    --primary: ${colors.gold};
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: var(--background) url(${bg}) center / cover no-repeat fixed;
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    margin: 0;
  }
`;
