import type { NextPage } from 'next'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import {Keyboard, Mousewheel, Pagination} from "swiper";

const Home: NextPage = () => {
  return (
      <Swiper direction={"vertical"}
              scrollbar={true}
              pagination={{
                clickable: true,
              }}
              freeMode={true}
              mousewheel={true}
              keyboard={true}
              modules={[Pagination, Mousewheel, Keyboard]}
              >
        <SwiperSlide>
          <article>
            <h1>WEDDING 1</h1>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper direction={'horizontal'} scrollbar={true}
                  pagination={{
                    clickable: true,
                  }}
                  freeMode={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Pagination, Mousewheel, Keyboard]}>
            <SwiperSlide>
              <article>
                <h1>WEDDING 2</h1>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <h1>WEDDING 2.1</h1>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <h1>WEDDING 2.2</h1>
              </article>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <h1>WEDDING 3</h1>
          </article>
        </SwiperSlide>
      </Swiper>
  )
}

export default Home
