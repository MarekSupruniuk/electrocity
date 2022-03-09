import styled from '@emotion/styled';
import headerIcon from 'common/svgs/header.svg';

export const Wrapper = styled.section`
  background-color: var(--color-secondary);
`;

export const Inner = styled.div`
  margin: 0 auto;
  max-width: var(--layout-width);
  padding: 120px 20px;
  text-align: center;
`;

export const Header = styled.h2`
  color: var(--color-primary);
  font: var(--font-header);
  margin-bottom: 70px;
  text-transform: uppercase;

  ::before {
    content: '';
    background: url(${headerIcon}) center no-repeat;
    display: inline-block;
    height: 26px;
    margin-right: 30px;
    width: 20px;
  }
`;

export const Description = styled.p`
  color: var(--color-primary);
`;
