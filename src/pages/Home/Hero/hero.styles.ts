import styled from '@emotion/styled';
import headerIcon from 'common/svgs/header.svg';

import backgroundImage from 'assets/images/bg-hero.webp';
import backgroundImageSmall from 'assets/images/bg-hero-small.webp';

export const Wrapper = styled.header`
  background: url(${backgroundImage}) 100% 0 / cover no-repeat;
  position: relative;
  height: var(--layout-hero-height);

  @media (max-width: 600px) {
    background-image: url(${backgroundImageSmall});
    height: min(570px, 100vh);
  }
`;

export const Inner = styled.div`
  left: calc(50vw + 90px);
  position: absolute;
  top: 25%;

  @media (max-width: 1400px) {
    left: calc(50vw);
    transform: translate(-50%);
  }

  @media (max-width: 600px) {
    top: 30%;
  }
`;

export const Title = styled.h2`
  font: 600 normal 66px/0.8 var(--font-family);
  margin-bottom: 20px;
  position: relative;
  width: min-content;

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 10px;
  }

  ::before {
    content: '';
    background: url(${headerIcon}) center/contain no-repeat;
    height: 50px;
    left: -80px;
    position: absolute;
    top: 10px;
    width: 40px;
  }

  @media (max-width: 600px) {
    ::before {
      height: 18px;
      left: -27px;
      top: 4px;
      width: 14px;
    }
  }
`;

export const Subtitle = styled.p`
  font: 400 normal 40px/1 var(--font-family);

  @media (max-width: 600px) {
    font-size: 16px;
    font-weight: 600;
  }
`;
