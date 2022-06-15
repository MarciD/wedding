import 'swiper/css';
import 'swiper/css/pagination';

import type { NextPage } from 'next';
import { useState } from 'react';
import { Keyboard, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../src/components/Card';
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
    <div className={'container'}>
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
          <SlideView>
            <div className={'w-64 text-left'}>
              <h1 className={'font-heading text-4xl md:text-9xl'}>WEDDING 1</h1>
              <p className={'font-body text-base md:text-2xl'}>
                Wir heiraten und Ihr seid dabei!
              </p>
            </div>
            <div className={'flex flex-1 flex-col'}>
              <Card
                title={'Locations'}
                image={
                  // eslint-disable-next-line max-len
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                }
              >
                <p>Hier erfährst du alles über die Locations</p>

                <ul>
                  <li onClick={() => slideTo(1.1)}>Standesamt (Trauung)</li>
                  <li onClick={() => slideTo(1.2)}>Spreespeicher (PartEy)</li>
                </ul>

                <button
                  type={'button'}
                  className={
                    // eslint-disable-next-line max-len
                    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  }
                  onClick={() => slideTo(1)}
                >
                  Zu den Location infos
                </button>
              </Card>
              <div>
                <h2 className={'font-heading'}>Zeitplan</h2>
              </div>
              <div>
                <h2 className={'font-heading'}>Infos</h2>
              </div>
              <div>
                <h2 className={'font-heading'}>Fotos</h2>
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
                <h1>WEDDING 2</h1>
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
              <h1>WEDDING 3</h1>
            </article>
          </SlideView>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
