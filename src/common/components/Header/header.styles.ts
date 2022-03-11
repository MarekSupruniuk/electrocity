import styled from '@emotion/styled';

type OpenableProps = {
  isOpen: boolean;
}
type Props = {
  hasBackground: boolean;
} & OpenableProps;
export const Wrapper = styled.nav<Props>`
  background-color: ${({ hasBackground }) =>
    hasBackground ? 'var(--color-white-overlay)' : 'transparent'};
  font: var(--font-alternative);
  height: ${({ isOpen }) => isOpen ? '100%' : 'auto' };
  position: fixed;
  top: 0;
  transition: background-color 1s ease;
  width: 100%;
  z-index: 100;
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 1780px;
  padding: 25px 35px;

  @media (max-width: 600px) {
    flex-flow: column;
    height: 100%;
    padding: 20px 35px;
  }
`;

export const LogoWrapper = styled.h1`
  height: 73px;
  margin-right: auto;

  @media (max-width: 600px) {
    height: 47px;
    margin: auto;
  }

  svg {
    height: 100%;
  }
`;

export const LinksWrapper = styled.div<OpenableProps>`
  display: flex;
  flex-flow: row nowrap;
  gap: 80px;

  @media (max-width: 900px) {
    gap: 40px;
  }

  @media (max-width: 600px) {
    flex: 1;
    flex-flow: column;
    gap: 70px;
    justify-content: center;
    max-height: ${({ isOpen }) => isOpen ? '100%' : '0' };
    overflow: hidden;
    width: 100%;
  }
`;

export const Link = styled.a`
  color: var(--color-primary);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;

export const MenuButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: none;
  justify-content: center;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;

  @media (max-width: 600px) {
    display: flex;
  }
`;
