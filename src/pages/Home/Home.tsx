import { Sections, SectionType } from 'common/consts/links';
import { Footer } from 'common/components/Footer/Footer';
import { Header } from 'common/components/Header/Header';
import { TopArrow } from 'common/components/TopArrow/TopArrow';

import { AboutUs } from './AboutUs/AboutUs';
import { Contact } from './Contact/Contact';
import { Hero } from './Hero/Hero';
import { Offer } from './Offer/Offer';
import { Map } from 'pages/Home/Map/Map';
import { Partners } from './Partners/Partners';

import { Section } from './home.styles';

export const Home = () => {
  return (
    <>
      <Header />
      <Section id={Sections[SectionType.HERO].id}>
        <Hero />
      </Section>
      <Section id={Sections[SectionType.ABOUT_US].id}>
        <AboutUs />
      </Section>
      <Section id={Sections[SectionType.OFFER].id}>
        <Offer />
      </Section>
      <Section id={Sections[SectionType.PARTNERS].id}>
        <Partners />
      </Section>
      <Section id={Sections[SectionType.MAP].id}>
        <Map />
      </Section>
      <Section id={Sections[SectionType.CONTACT].id}>
        <Contact />
      </Section>
      <Footer />
      <TopArrow />
    </>
  );
};
