import styled from '@emotion/styled';

import backgroundImage from 'assets/images/bg-hero.webp';

export const Wrapper = styled.header`
  background: url(${backgroundImage}) 50% 0 / cover no-repeat;
  height: var(--layout-hero-height);

  * {
    display: none;
  }
`;
