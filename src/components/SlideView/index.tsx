import { FC, PropsWithChildren } from 'react';

type SlideViewProps = {
  className?: string;
};

const SlideView: FC<PropsWithChildren<SlideViewProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${
        className || ''
      } flex flex-1 h-full justify-center items-center p-2`}
    >
      {children}
    </div>
  );
};

export default SlideView;
