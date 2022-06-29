import { FC, PropsWithChildren } from 'react';

type CardProps = {
  className?: string;
};

const Card: FC<PropsWithChildren<CardProps>> = ({ className, children }) => {
  return (
    <div
      className={
        // eslint-disable-next-line max-len
        `flex flex-row text-white justify-center text-center  w-6/12 sm:w-3/12 ${
          className || ''
        }`
      }
    >
      <div className={'items-center justify-start'}>{children}</div>
    </div>
  );
};

export default Card;
