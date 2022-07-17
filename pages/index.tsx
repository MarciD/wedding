import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const vidRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    vidRef?.current?.play();
  }, [vidRef]);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className={'bg-video'}
        autoPlay
        muted
        loop
        playsInline
        ref={vidRef}
      >
        <source src="/video/video-3.mp4" type="video/mp4" />
      </video>

      <div className="view">
        <div className="main-text-wrapper">
          <h2 style={{ paddingBottom: '8px' }}>Jane & Marcel</h2>
          <h1>Heiraten</h1>
          <h2 style={{ paddingTop: '8px' }}>am 17.08.2022</h2>
        </div>
      </div>
      <div className="view">
        <div className="card">
          <h1>Bitte final zusagen!</h1>
          <p>
            ...um die letzten Schritte mit der Location, Deko und allem drum
            herum zu finalisieren, bitten wir euch, uns einmal beschheid zu
            geben persönlich, Telefon, whatsapp.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
