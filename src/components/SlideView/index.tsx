import { FC, PropsWithChildren } from 'react';

type SlideViewProps = Record<string, any> & {
  className?: string;
};

const SlideView: FC<PropsWithChildren<SlideViewProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`${className || ''} flex w-full h-full p-2`} {...rest}>
      {children}
    </div>
  );
};

export default SlideView;
