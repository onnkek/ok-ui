import { Mods, classNames } from 'helpers/classNames';
import cls from './Breadcrumbs.module.sass';
import { ReactComponent as HomeIcon } from 'assets/icons/home-line.svg';
import { ReactComponent as ChevronIcon } from 'assets/icons/chevron-right.svg';
import { ReactComponent as SlashIcon } from 'assets/icons/slash-divider.svg';

interface BreadcrumbsItem {
  content: string;
}
type DividerTheme = 'chevron' | 'slash';
const dividerClasses: Record<DividerTheme, string> = {
  chevron: cls.chevron,
  slash: cls.slash
};

export interface BreadcrumbsProps {
  className?: string;
  items?: BreadcrumbsItem[];
  dividerTheme?: DividerTheme;
}

export const Breadcrumbs = ({
  className,
  items,
  dividerTheme = 'chevron'
}: BreadcrumbsProps) => {

  const dividerMods: Mods = {
    [dividerClasses[dividerTheme]]: true
  }
  return (
    <div className={classNames(cls.breadcrumbs, {}, [className])}>
      <HomeIcon className={cls.home} />

      {items?.map(item => (
        <>
          {dividerTheme === 'chevron' && <ChevronIcon className={classNames(cls.divider, dividerMods)} />}
          {dividerTheme === 'slash' && <SlashIcon className={classNames(cls.divider, dividerMods)} />}
          <div className={cls.item}>{item.content}</div>
        </>

      ))}
    </div>
  );
};