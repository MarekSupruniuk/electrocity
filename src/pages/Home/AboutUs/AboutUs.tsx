import { Container } from 'common/components/Container/Container';
import { Title } from 'common/components/Title/Title';

import { Description, Wrapper } from './aboutUs.styles';

export const AboutUs = () => (
  <Wrapper>
    <Container>
      <Title>O nas</Title>

      <Description>
        Electro City Sp. z o.o. to firma, której obszarem działania jest budowa
        Odnawialnych Źródeł Energii. Gros projektów stanowi kompleksowe
        wykonawstwo farm fotowoltaicznych, obejmujące dostawy materiałów, budowę
        części konstrukcyjnej, budowę części elektrycznej, kierownictwo i nadzór
        budowlany oraz obsługę inżynierską wymienionych prac. Roczne realizacje
        w 2021 r. obejmą ponad 120 MW sumarycznej mocy zainstalowanej w OZE.
        Prace na obszarze całej polski, współpraca z krajowymi i zagranicznymi
        inwestorami orazilość realizowanych projektów potwierdzają nasz
        profesjonalizm oraz jakość wykonywanych usług.
      </Description>
    </Container>
  </Wrapper>
);
