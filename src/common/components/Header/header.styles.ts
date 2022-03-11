import styled from '@emotion/styled';

type Props = {
  hasBackground: boolean;
};
export const Wrapper = styled.nav<Props>`
  background-color: ${({ hasBackground }) =>
    hasBackground ? 'var(--color-white-overlay)' : 'transparent'};
  font: var(--font-alternative);
  position: fixed;
  top: 0;
  transition: background-color 1s ease;
  width: 100%;
  z-index: 100;
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  gap: 80px;
  height: var(--layout-footer-height);
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 1780px;
  padding: 0 30px;
`;

export const LogoWrapper = styled.h1`
  margin-right: auto;
`;

export const Link = styled.a`
  color: var(--color-primary);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    text-decoration: underline;
  }
`;
