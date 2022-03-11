import styled from '@emotion/styled';
import headerIcon from 'common/svgs/header.svg';

type Props = {
  alternative?: boolean;
};

export const Title = styled.h2<Props>`
  --title-color: ${({ alternative }) =>
    `var(${alternative ? '--color-secondary' : '--color-primary'})`};
  
  color: var(--title-color);
  font: var(--font-header);
  margin-bottom: 70px;
  text-transform: uppercase;

  ::before {
    content: '';
    background: url(${headerIcon}) center/cover no-repeat;
    display: inline-block;
    height: 26px;
    margin-right: 30px;
    width: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 40px;

    ::before {
      height: 18px;
      margin-right: 20px;
      width: 14px
    }
  }
`;
