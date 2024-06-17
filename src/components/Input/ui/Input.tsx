import { Mods, classNames } from 'helpers/classNames';
import cls from './Input.module.sass';
import { Input as HInput } from '@headlessui/react';
import { ReactComponent as QuestionIcon } from 'assets/icons/question.svg';

export interface InputProps {
  className?: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}

export const Input = ({ className, Icon, disabled }: InputProps) => {

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.haveIcon]: !Icon
  }
  return (
    <div className={cls.inputContainer}>
      {Icon && <Icon className={cls.icon} />}
      <HInput disabled={disabled} className={classNames(cls.input, mods, [className])} placeholder='olivia@untitledui.com' name="full_name" type="text" />
      <QuestionIcon className={cls.info} />
    </div>
  );
};