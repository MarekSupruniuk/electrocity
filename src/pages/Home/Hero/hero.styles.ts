import styled from '@emotion/styled';
import headerIcon from 'common/svgs/header.svg';

import backgroundImage from 'assets/images/bg-hero.webp';

export const Wrapper = styled.header`
  background: url(${backgroundImage}) 50% 0 / cover no-repeat;
  height: var(--layout-hero-height);
`;

export const Inner = styled.div`
  margin: 0 auto;
  padding: 270px 0 0;
  width: var(--layout-width);
`;

export const Title = styled.h2`
  font: 600 normal 66px/0.8 var(--font-family);
  margin-bottom: 20px;
  margin-left: 50%;
  position: relative;

  ::before {
    content: '';
    background: url(${headerIcon}) center/contain no-repeat;
    height: 50px;
    left: -90px;
    position: absolute;
    top: 10px;
    width: 40px;
  }
`;

export const Subtitle = styled.p`
  font: 400 normal 40px/1 var(--font-family);
  margin-left: 50%;
`;
