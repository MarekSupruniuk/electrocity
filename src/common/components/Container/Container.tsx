import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--layout-width);
  padding: 120px 35px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 60px 35px;
  }
`;
