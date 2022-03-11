/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { colors } from 'common/consts/colors';
import { layout } from 'common/consts/layout';

export const globalStyles = css`
  ${emotionReset}

  *, *::before, *::after {
    box-sizing: border-box;
    outline-width: 0;
    appearance: none;
  }

  :root {
    --color-background: ${colors.white};
    --color-white-overlay: ${colors.whiteOverlay};
    --color-gray: ${colors.gray};
    --color-light-gray: ${colors.lightGray};
    --color-primary: ${colors.gold};
    --color-secondary: ${colors.navy};

    --font-family: 'Barlow', 'Segoe UI', 'Roboto', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    --font-alternative: 400 normal 16px/1 var(--font-family);
    --font-default: 300 normal 20px/1.6 var(--font-family);
    --font-header: 400 normal 36px/1.6 var(--font-family);

    --layout-footer-height: ${layout.footerHeight}px;
    --layout-hero-height: ${layout.heroHeight}px;
    --layout-map-height: ${layout.mapHeight}px;
    --layout-width: ${layout.layoutWidth}px;

    @media (max-width: 600px) {
      --font-alternative: 400 normal 16px/1 var(--font-family);
      --font-default: 300 normal 14px/1.6 var(--font-family);
      --font-header: 400 normal 26px/1.6 var(--font-family);
    }
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: var(--color-background, #fff);
    color: var(--color-secondary, #000);
    font: var(--font-default);
    margin: 0;
  }
`;
