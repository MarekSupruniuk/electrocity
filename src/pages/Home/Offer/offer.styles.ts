import styled from '@emotion/styled';
import headerIcon from 'common/svgs/header.svg';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  margin: 0 auto;
  max-width: var(--layout-width);
  padding: 120px 30px;
  text-align: center;
`;

export const Header = styled.h2`
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
  width: 300px;

  svg {
    display: block;
    margin-bottom: 70px;
  }
`;
