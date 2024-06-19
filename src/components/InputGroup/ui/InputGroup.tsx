import { Mods, classNames } from 'helpers/classNames';
import cls from './InputGroup.module.sass';
import { ReactNode } from 'react';
import { ReactComponent as QuestionIcon } from 'assets/icons/question.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert.svg';

export interface InputGroupProps {
  className?: string;
  children?: ReactNode;
  label?: string;
  descr?: string;
  error?: string;
}

export const InputGroup = ({ className, children, label, descr, error }: InputGroupProps) => {
  const mods: Mods = {
    [cls.parentError]: error
  }
  return (
    <form className={classNames(cls.inputGroup, mods, [className])}>
      {label && <label className={cls.label}>{label}</label>}
      <div className={cls.inputContainer}>
        <div className={cls.input}>
          {children}
        </div>
        
      </div>
      {!error && descr && <div className={cls.descr}>{descr}</div>}
      {error && <div className={cls.error}>{error}</div>}
    </form>
  );
};