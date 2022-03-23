import { Container } from 'common/components/Container/Container';
import { Title } from 'common/components/Title/Title';

import pbdiLogo from 'assets/logos/pbdi.webp';
import eneaLogo from 'assets/logos/enea.webp';
import idLogo from 'assets/logos/id-energias.webp';
import aldesaLogo from 'assets/logos/aldesa.webp';
import ewgLogo from 'assets/logos/ewg.webp';
import pandqLogo from 'assets/logos/pandq.webp';
import cjrLogo from 'assets/logos/cjr.webp';
import sunLogo from 'assets/logos/sun.webp';
import spectrisLogo from 'assets/logos/spectris.webp';
import sevivonLogo from 'assets/logos/sevivon.webp';
import nomadLogo from 'assets/logos/nomad-electric.webp';

import { List, ListItem, Wrapper } from './partners.styles';

export const Partners = () => (
  <Wrapper>
    <Container>
      <Title>Partnerzy</Title>

      <List>
        <ListItem><img src={pbdiLogo} alt="PBDI" /></ListItem>
        <ListItem><img src={eneaLogo} alt="ENEA" /></ListItem>
        <ListItem><img src={idLogo} alt="I+D Energias" /></ListItem>
        <ListItem><img src={aldesaLogo} alt="aldesa" /></ListItem>
        <ListItem><img src={ewgLogo} alt="EWG" /></ListItem>
        <ListItem><img src={pandqLogo} alt="p&q" /></ListItem>
        <ListItem><img src={cjrLogo} alt="CJR Renewables" /></ListItem>
        <ListItem><img src={sunLogo} alt="Sun Investment Group" /></ListItem>
        <ListItem><img src={spectrisLogo} alt="SPECTRIS" /></ListItem>
        <ListItem><img src={sevivonLogo} alt="Sevivon" /></ListItem>
        <ListItem><img src={nomadLogo} alt="Nomad Electric" /></ListItem>
      </List>
    </Container>
  </Wrapper>
);
