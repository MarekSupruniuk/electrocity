/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import bg from 'assets/images/bg.webp';

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

    --font-family: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    --font-alternative: 400 normal 16px/1 var(--font-family);
    --font-default: 300 normal 20px/1.6 var(--font-family);
    --font-header: 400 normal 36px/1.6 var(--font-family);

    --layout-footer-height: ${layout.desktop.footerHeight}px;
    --layout-hero-height: ${layout.desktop.heroHeight}px;
    --layout-map-height: ${layout.desktop.mapHeight}px;
    --layout-width: ${layout.desktop.layoutWidth}px;

    @media (max-width: 420px) {
      --font-alternative: 400 normal 16px/1 var(--font-family);
      --font-default: 300 normal 14px/1.6 var(--font-family);
      --font-header: 400 normal 26px/1.6 var(--font-family);

      --layout-hero-height: ${layout.mobile.heroHeight}px;
      --layout-map-height: ${layout.mobile.mapHeight}px;
    }
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: var(--color-background, #fff) url(${bg}) center / cover
      no-repeat fixed;
    color: var(--color-secondary, #000);
    font: var(--font-default);
    margin: 0;
  }
`;
