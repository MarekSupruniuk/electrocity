import { NavLinks, Sections, SectionType } from 'common/consts/links';
import { ReactComponent as Logo } from 'common/svgs/logo.svg';
import { ReactComponent as Hamburger } from 'common/svgs/hamburger.svg';
import { ReactComponent as Close } from 'common/svgs/close.svg';

import { useNavigation } from './header.hooks';
import {
  Inner,
  Link,
  LinksWrapper,
  LogoWrapper,
  MenuButton,
  Wrapper,
} from './header.styles';

type Props = {
  hasBackground: boolean;
};
export const Header = ({ hasBackground }: Props) => {
  const { handleAction, handleToggle, isOpen } = useNavigation();

  return (
    <Wrapper hasBackground={hasBackground || isOpen} isOpen={isOpen}>
      <Inner>
        <LogoWrapper>
          <a href={`#${Sections[SectionType.HOME].id}`} onClick={handleAction}>
            <Logo title={Sections[SectionType.HOME].label} />
          </a>
        </LogoWrapper>

        <LinksWrapper isOpen={isOpen}>
          {NavLinks.map((link) => (
            <Link key={link.id} href={`#${link.id}`} onClick={handleAction}>
              {link.label}
            </Link>
          ))}
        </LinksWrapper>

        <MenuButton onClick={handleToggle} type="button">
          {isOpen ? <Close /> : <Hamburger />}
        </MenuButton>
      </Inner>
    </Wrapper>
  );
};
