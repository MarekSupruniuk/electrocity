import { ReactComponent as OfferSvg0 } from 'common/svgs/offer-0.svg';
import { ReactComponent as OfferSvg1 } from 'common/svgs/offer-1.svg';
import { ReactComponent as OfferSvg2 } from 'common/svgs/offer-2.svg';
import { ReactComponent as OfferSvg3 } from 'common/svgs/offer-3.svg';
import { ReactComponent as OfferSvg4 } from 'common/svgs/offer-4.svg';
import { ReactComponent as OfferSvg5 } from 'common/svgs/offer-5.svg';
import { ReactComponent as OfferSvg6 } from 'common/svgs/offer-6.svg';

import {
  Description,
  Header,
  Inner,
  List,
  ListItem,
  Wrapper,
} from './offer.styles';

export const Offer = () => (
  <Wrapper>
    <Inner>
      <Header>Oferta</Header>
      <Description>W zakresie naszych usług znajdują się:</Description>

      <List>
        <ListItem>
          <OfferSvg0 />
          budowa farm fotowoltaicznych, obejmująca prace konstrukcyjne oraz
          elektryczne, w formie „pod klucz”
        </ListItem>
        <ListItem>
          <OfferSvg1 />
          budowa przyłączy elektroenergetycznych średniego napięcia od stacji aż
          do punktu przyłączenia do sieci dystrybucyjnej
        </ListItem>
        <ListItem>
          <OfferSvg2 />
          kompleksowe pomiary farm fotowoltaicznych, stacji transformatorowych
          SN/nn oraz kabli niskiego i średniego napięcia
        </ListItem>
        <ListItem>
          <OfferSvg3 />
          kierownictwo budowy w rozumieniu zapisów Prawa Budowlanego
        </ListItem>
        <ListItem>
          <OfferSvg4 />
          nadzór nad budową w rozumieniu zapisów Prawa Budowlanego
        </ListItem>
        <ListItem>
          <OfferSvg5 />
          obsługa inżynierska procesu budowlanego obiektów OZE
        </ListItem>
        <ListItem>
          <OfferSvg6 />
          obsługa procesu przyłączania farm fotowoltaicznych i wiatrowych do
          sieci w oparciu o między innymi regulacje Nc RfG oraz NC DC
        </ListItem>
      </List>
    </Inner>
  </Wrapper>
);
