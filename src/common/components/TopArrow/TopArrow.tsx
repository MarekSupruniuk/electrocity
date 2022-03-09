import { Sections, SectionType } from 'common/consts/links';
import { ReactComponent as Icon } from 'common/svgs/top-arrow.svg';

export const TopArrow = () => (
  <a href={`#${Sections[SectionType.HOME]!.id}`}>
    <Icon title="Przewiń do góry" />
  </a>
);
