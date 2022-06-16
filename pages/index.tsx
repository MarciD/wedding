import 'swiper/css';
import 'swiper/css/pagination';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { Keyboard, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SlideView from '../src/components/SlideView';

const Home: NextPage = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperB, setSwiperB] = useState(null);

  const slideTo = (index: number) => {
    const [slideIndexOne, slideIndexTwo] = index.toString().split('.');

    swiper.slideTo(parseInt(slideIndexOne));
    slideIndexTwo !== undefined && swiperB.slideTo(parseInt(slideIndexTwo));
  };

  return (
    <Swiper
      direction={'vertical'}
      scrollbar={true}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      mousewheel={true}
      keyboard={true}
      modules={[Pagination, Mousewheel, Keyboard]}
      onSwiper={setSwiper}
    >
      <SwiperSlide>
        <SlideView
          className={'flex-col items-center justify-center'}
          style={{
            background:
              // eslint-disable-next-line max-len
              'linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(/img/hero.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className={'text-center font-extrabold mix-blend-lighten px-8 py-6'}
            style={{
              backgroundColor: 'rgba(255,255,255,.9)',
              maxWidth: '320px',
            }}
          >
            <h1 className={'font-heading text-4xl md:text-6xl'}>
              Wir Heiraten
            </h1>
          </div>
          <p className={'font-body text-base text-white'}>
            Hier findet Ihr alle Infos zu Unserem Tag.
          </p>

          <div className={'flex justify-between w-full'}>
            <div className={'flex flex-row text-white text-center'}>
              <div className={'items-center justify-start ml-4 border-r'}>
                <h2
                  className={
                    'font-heading font-extrabold text-6xl mb-4 cursor-pointer'
                  }
                >
                  <button onClick={() => slideTo(1)}>Locations</button>
                </h2>
                <button
                  className={'w-full text-left mb-1 font-light'}
                  type={'button'}
                  onClick={() => slideTo(1.1)}
                >
                  Standesamt (Trauung)
                </button>
                <button
                  className={'w-full text-left font-light'}
                  type={'button'}
                  onClick={() => slideTo(1.2)}
                >
                  Spreespeicher (PartEy)
                </button>
              </div>
            </div>

            <div className={'flex flex-row text-white'}>
              <div className={'items-center justify-start ml-4 border-r'}>
                <h2
                  className={
                    'font-heading font-extrabold text-6xl mb-4 cursor-pointer'
                  }
                >
                  <button onClick={() => slideTo(2)}>Zeitplan</button>
                </h2>
              </div>
            </div>
            <div className={'flex flex-row text-white'}>
              <div className={'items-center justify-start ml-4 border-r'}>
                <h2
                  className={
                    'font-heading font-extrabold text-6xl mb-4 cursor-pointer'
                  }
                >
                  <button onClick={() => slideTo(3)}>Gästeinfos</button>
                </h2>
              </div>
            </div>
            <div className={'flex flex-row text-white'}>
              <div className={'items-center justify-start ml-4 border-r'}>
                <h2
                  className={
                    'font-heading font-extrabold text-6xl mb-4 cursor-pointer'
                  }
                >
                  <button onClick={() => slideTo(4)}>Fotos</button>
                </h2>
              </div>
            </div>
          </div>
        </SlideView>
      </SwiperSlide>

      <SwiperSlide>
        <Swiper
          direction={'horizontal'}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard]}
          onSwiper={setSwiperB}
        >
          <SwiperSlide>
            <SlideView>
              <h1>Location</h1>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <h1>WEDDING 2.1</h1>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <h1>WEDDING 2.2</h1>
            </SlideView>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <SlideView>
          <article>
            <h1>Zeitplan</h1>
          </article>
        </SlideView>
      </SwiperSlide>
      <SwiperSlide>
        <SlideView>
          <article>
            <h1>Infos</h1>
          </article>
        </SlideView>
      </SwiperSlide>
      <SwiperSlide>
        <SlideView>
          <article>
            <h1>Fotos</h1>
          </article>
        </SlideView>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
