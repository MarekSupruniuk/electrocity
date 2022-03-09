import { Abbr, Header, Inner, List, ListItem, Wrapper } from './contact.styles';

export const Contact = () => (
  <Wrapper>
    <Inner>
      <Header>Kontakt</Header>

      <List>
        <ListItem>Szkolna 9, 16-060 Zabłudów, Polska</ListItem>
        <ListItem>
          <Abbr>KRS</Abbr>
          0000869428
        </ListItem>
        <ListItem>
          <Abbr>NIP</Abbr>
          9662144866
        </ListItem>
        <ListItem>
          <Abbr>REGON</Abbr>
          387509442
        </ListItem>
      </List>
    </Inner>
  </Wrapper>
);
