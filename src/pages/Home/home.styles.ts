import styled from '@emotion/styled';

export const Section = styled.div``;

type Props = {
  isVisible: boolean;
};
export const ScrollToTop = styled.div<Props>`
  bottom: 200px;
  position: fixed;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  right: 100px;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: opacity 0.5s ease;
`;
