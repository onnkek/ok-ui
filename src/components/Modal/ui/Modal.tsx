import cls from './Modal.module.sass';
import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../../Portal';
import { Mods, classNames } from 'helpers/classNames';
import { ReactComponent as XIcon } from 'assets/icons/x.svg';
import { ReactComponent as CircleMockupIcon } from 'assets/icons/bg-circles-s.svg';
import { Button } from 'components/Button';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

// const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, lazy, onClose, Icon }: ModalProps) => {

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      // timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
      // }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {

    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            <div className={cls.header}>
              {Icon && <Icon />}
              {<CircleMockupIcon className={cls.wrapper} />}
              {<Button onClick={closeHandler} className={cls.close} theme='clear'>
                <XIcon />
              </Button>}
            </div>
            <div className={cls.body}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};