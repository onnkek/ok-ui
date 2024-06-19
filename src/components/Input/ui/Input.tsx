import { Mods, classNames } from 'helpers/classNames';
import cls from './Input.module.sass';
import { Input as HInput } from '@headlessui/react';
import { ReactComponent as QuestionIcon } from 'assets/icons/question.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert.svg';

export interface InputProps {
  className?: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  descr?: string;
  error?: string;
}

export const Input = ({ className, Icon, disabled, descr, error }: InputProps) => {

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.haveIcon]: !Icon,
    [cls.parentError]: error
  }
  return (
    <div className={classNames(cls.inputContainer, mods)}>
      {Icon && <Icon className={cls.icon} />}
      <HInput disabled={disabled} className={classNames(cls.input, {}, [className])} placeholder='olivia@untitledui.com' name="full_name" type="text" />
      {error ? <AlertIcon className={cls.info} /> : <QuestionIcon className={cls.info} />}
    </div>
  );
};