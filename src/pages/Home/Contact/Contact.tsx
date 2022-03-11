import { Container } from 'common/components/Container/Container';
import { Title } from 'common/components/Title/Title';

import { Abbr, List, ListItem, Wrapper } from './contact.styles';

export const Contact = () => (
  <Wrapper>
    <Container>
      <Title alternative>Kontakt</Title>

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
    </Container>
  </Wrapper>
);
