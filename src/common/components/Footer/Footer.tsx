import { NavLinks } from 'common/consts/links';

import { Wrapper } from './footer.styles';

export const Footer = () => (
  <Wrapper>
    {NavLinks.map((link) => (
      <a key={link.id} href={`#${link.id}`}>
        {link.label}
      </a>
    ))}
    <p>copyright &copy; 2022</p>
  </Wrapper>
);
