import styled from '@emotion/styled';
import bg from 'assets/images/bg.webp';

export const Wrapper = styled.section`
  background: url(${bg}) 0 50% / cover no-repeat fixed;
`;

export const Description = styled.p``;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: center;
`;
export const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 130px;
  max-width: 300px;

  svg {
    display: block;
    margin-bottom: 70px;
  }

  @media (max-width: 600px) {
    margin-top: 40px;

    svg {
      height: 76px;
      margin-bottom: 30px;
      width: 76px;
    }
  }
`;
