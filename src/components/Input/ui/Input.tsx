import { classNames } from 'helpers/classNames';
import cls from './Input.module.sass';

export interface InputProps {
  className?: string;
}

export const Input = ({ className }: InputProps) => {

  return (
    <div className={classNames(cls.input, {}, [className])}>

    </div>
  );
};