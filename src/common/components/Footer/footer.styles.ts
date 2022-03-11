import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  background-color: var(--color-background);
  font: var(--font-alternative);
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  height: var(--layout-footer-height);
  margin: 0 auto;
  max-width: var(--layout-width);
  padding: 0 20px;
`;

export const Link = styled.a`
  color: var(--color-primary);
  font-weight: normal;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  color: var(--color-gray);
  margin-left: auto;
`;