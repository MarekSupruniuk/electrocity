export enum SectionType {
  ABOUT_US = 'about-us',
  CONTACT = 'contact',
  HERO = 'hero',
  HOME = 'home',
  MAP = 'map',
  OFFER = 'offer',
  PARTNERS = 'partners',
}

type Section = {
  id: SectionType;
  order: number;
  label: string;
};

export const Sections: Record<SectionType, Section> = {
  [SectionType.HOME]: {
    id: SectionType.HOME,
    order: 0,
    label: 'Electro City',
  },
  [SectionType.HERO]: {
    id: SectionType.HERO,
    order: 1,
    label: 'Electro City',
  },
  [SectionType.ABOUT_US]: {
    id: SectionType.ABOUT_US,
    order: 2,
    label: 'O nas',
  },
  [SectionType.OFFER]: {
    id: SectionType.OFFER,
    order: 3,
    label: 'Oferta',
  },
  [SectionType.PARTNERS]: {
    id: SectionType.PARTNERS,
    order: 4,
    label: 'Partnerzy',
  },
  [SectionType.MAP]: {
    id: SectionType.MAP,
    order: 5,
    label: 'Map',
  },
  [SectionType.CONTACT]: {
    id: SectionType.CONTACT,
    order: 6,
    label: 'Kontakt',
  },
};

export const NavLinks = [
  Sections[SectionType.ABOUT_US],
  Sections[SectionType.OFFER],
  Sections[SectionType.CONTACT],
].sort((a, b) => a!.order - b!.order);
