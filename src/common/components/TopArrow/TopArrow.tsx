import { Sections, SectionType } from 'common/consts/links';
import { ReactComponent as Icon } from 'common/svgs/top-arrow.svg';

// import { Wrapper } from './header.styles';

export const TopArrow = () => (
  <a href={`#${Sections[SectionType.HOME]!.id}`}>
    <Icon /> to the top
  </a>
);
