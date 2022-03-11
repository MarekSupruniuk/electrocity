import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  background-color: var(--color-background);
  font: var(--font-alternative);
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  margin: 0 auto;
  max-width: var(--layout-width);
  padding: 50px 35px;

  @media (max-width: 600px) {
    padding: 20px 35px;
  }
`;

export const Link = styled.a`
  color: var(--color-primary);
  font-weight: normal;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Copyright = styled.p`
  color: var(--color-gray);
  margin-left: auto;

  @media (max-width: 600px) {
    margin: auto;
  }
`;