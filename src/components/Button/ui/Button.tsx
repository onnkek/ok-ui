import cls from './Button.module.sass';

export interface ButtonProps {
  className?: string;
}

export const Button = ({ className }: ButtonProps) => {

  return (
    <div className={cls.button}>

    </div>
  );
};