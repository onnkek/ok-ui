import { Mods, classNames } from 'helpers/classNames';
import cls from './Input.module.sass';
import { Input as HInput } from '@headlessui/react';
import { ReactComponent as QuestionIcon } from 'assets/icons/question.svg';

export interface InputProps {
  className?: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Input = ({ className, Icon }: InputProps) => {

  const mods: Mods = {
    [cls.haveIcon]: !Icon
  }
  return (
    <div className={cls.inputContainer}>
      {Icon && <Icon className={cls.icon} />}
      <HInput className={classNames(cls.input, mods, [className])} placeholder='olivia@untitledui.com' name="full_name" type="text" />
      <QuestionIcon className={cls.info} />
    </div>
  );
};