import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

type CardProps = {
  title: string;
  image: string;
};

const Card: FC<PropsWithChildren<CardProps>> = ({ title, image, children }) => {
  return (
    <div
      className="rounded-lg
        shadow-lg
        bg-gray-600
        w-full
        flex
        flex-row
        flex-wrap
        p-3
        antialiased
      "
      style={{
        backgroundColor: 'rgba(255,255,255,0.6)',
        boxShadow: '0 4px 12px -6px rgba(0,0,0,0.6)',
      }}
    >
      <div className={'w-full text-center'}>
        <Image
          className="rounded-full overflow-hidden antialiased"
          objectFit={'contain'}
          src={image}
          height={'40px'}
          width={'40px'}
          alt={'title'}
        />
      </div>

      <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        <div
          className="
            w-full
            text-gray-700
            relative
            pt-3
            md:pt-0
          "
        >
          <div className="text-4xl">
            <h2 className={'font-heading'}>{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
