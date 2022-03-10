import { NavLinks, Sections, SectionType } from 'common/consts/links';
import { ReactComponent as Logo } from 'common/svgs/logo.svg';

import { Inner, Link, LogoWrapper, Wrapper } from './header.styles';

type Props = {
  hasBackground: boolean;
};
export const Header = ({ hasBackground }: Props) => (
  <Wrapper hasBackground={hasBackground}>
    <Inner>
      <LogoWrapper>
        <a href={`#${Sections[SectionType.HOME].id}`}>
          <Logo title={Sections[SectionType.HOME].label} />
        </a>
      </LogoWrapper>

      {NavLinks.map((link) => (
        <Link key={link.id} href={`#${link.id}`}>
          {link.label}
        </Link>
      ))}
    </Inner>
  </Wrapper>
);
