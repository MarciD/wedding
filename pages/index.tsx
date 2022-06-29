import 'swiper/css';
import 'swiper/css/pagination';

import type { NextPage } from 'next';
import { useState } from 'react';
import { Keyboard, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../src/components/Card';
import Navigation from '../src/components/Navigation';
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
      <SwiperSlide
        style={{
          background:
            // eslint-disable-next-line max-len
            'linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(/img/hero.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          flexDirection: 'column',
        }}
      >
        <SlideView className={'flex-col items-center justify-center'}>
          <div
            className={'text-center w-full mix-blend-lighten px-8 py-12'}
            style={{
              backgroundColor: 'rgba(255,255,255,.9)',
              maxWidth: '460px',
            }}
          >
            <h1 className={'font-heading font-extrabold text-6xl md:text-8xl'}>
              Wir Heiraten
            </h1>
            <span className={'font-body'}>am 17.078.2022</span>
          </div>
        </SlideView>
        <Navigation slideTo={slideTo} />
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
          <SwiperSlide
            style={{
              background:
                // eslint-disable-next-line max-len
                'linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(/img/bg-locations.png)',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              flexDirection: 'column',
            }}
          >
            <SlideView className={'flex-col items-center justify-center'}>
              <div
                className={'text-center w-full mix-blend-lighten px-8 py-12'}
                style={{
                  backgroundColor: 'rgba(255,255,255,.9)',
                  maxWidth: '460px',
                }}
              >
                <h1
                  className={'font-heading font-extrabold text-6xl md:text-8xl'}
                >
                  Locations
                </h1>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide
            style={{
              background:
                // eslint-disable-next-line max-len
                'linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(/img/bg-locations.png)',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              flexDirection: 'column',
            }}
          >
            <SlideView className={'flex-col items-center justify-center'}>
              <div
                className={
                  'text-center w-full mix-blend-lighten px-8 py-12 mb-48'
                }
                style={{
                  backgroundColor: 'rgba(255,255,255,.9)',
                  maxWidth: '460px',
                }}
              >
                <h1
                  className={'font-heading font-extrabold text-6xl md:text-8xl'}
                >
                  Standesamt
                </h1>
              </div>
              <div className={'font-body text-white'}>
                <div>
                  <p className={'text-2xl mb-4'}>
                    Alice-Salomon-Platz 3<br />
                    12627 Berlin
                  </p>
                  <a
                    href={
                      'https://www.google.de/maps/place/Alice-Salomon-Platz+3,+12627+Berlin/@52.5372744,13.5998398,16.15z/data=!4m13!1m7!3m6!1s0x47a84a3495fd9a15:0x317596d56cb78706!2sAlice-Salomon-Platz+3,+12627+Berlin!3b1!8m2!3d52.5372387!4d13.6037516!3m4!1s0x47a84a3495fd9a15:0x317596d56cb78706!8m2!3d52.5372387!4d13.6037516'
                    }
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Anfahrt über Google Maps
                  </a>
                </div>
                <div></div>
              </div>
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
