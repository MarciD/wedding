import 'swiper/css';
import 'swiper/css/pagination';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video autoPlay loop muted playsInline className={'sm:object-left'}>
        <source src="/video/bg-video.mov" type="video/mp4" />
      </video>

      <div className="container mx-auto">
        <div className="flex h-screen">
          <div className="m-auto text-wrapper">
            <h2>17.08.2022</h2>
            <h1>Wir Heiraten</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
