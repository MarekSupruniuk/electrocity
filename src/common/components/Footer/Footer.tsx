import { NavLinks } from 'common/consts/links';

import { Copyright, Inner, Link, Wrapper } from './footer.styles';

export const Footer = () => (
  <Wrapper>
    <Inner>
      {NavLinks.map((link) => (
        <Link key={link.id} href={`#${link.id}`}>
          {link.label}
        </Link>
      ))}

      <Copyright>Copyright &copy; 2022</Copyright>
    </Inner>
  </Wrapper>
);
