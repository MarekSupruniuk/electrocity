import { NavLinks, Sections, SectionType } from 'common/consts/links';
import {} from 'common/consts/links';
import logo from 'common/svgs/logo.svg';

import { Wrapper } from './header.styles';

export const Header = () => (
  <Wrapper id={Sections[SectionType.HOME]!.id}>
    <h1>
      <img src={logo} className="App-logo" alt="logo" />
      Electro City
    </h1>
    {NavLinks.map((link) => (
      <a key={link.id} href={`#${link.id}`}>
        {link.label}
      </a>
    ))}
  </Wrapper>
);
