import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';

const Home: NextPage = () => {
  const vidRef = useRef<HTMLVideoElement>();

  return (
    <>
      <video
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
        className={'bg-video'}
      >
        <source src="video/video-1.mp4" type="video/mp4" />
      </video>

      <div className="view">
        <div className="main-text-wrapper">
          <h2 style={{ paddingBottom: '8px' }}>Jane & Marcel</h2>
          <h1>Heiraten</h1>
          <h2 style={{ paddingTop: '8px' }}>am 17.08.2022</h2>
        </div>
      </div>
      <div className="view">
        <div className="main-text-wrapper">
          <h1>Wir bitten um finale Zusagen!</h1>
          <p>
            ...um die letzten Schritte (endlich) zu finalisieren...
            <br />
            <br />
            Location, Deko und allem drum herum
            <br />
            <br />
            bitten wir euch, uns noch einmal final bescheid zu geben ob wir mit
            euch rechnen können.
          </p>
          <div className={'inline-flex-space'}>
            <Link
              href={`https://wa.me/491736999240?text=${encodeURI(
                'Wir "[Hier alle eure Namen und alter]" freuen uns sehr bei eurer Hochzeit dabei sein zu dürfen... Liebe ❤️'
              )}`}
            >
              <a>
                <AiOutlineWhatsApp size={'68px'} />
                per WhatsApp
              </a>
            </Link>
            <p>oder</p>
            <Link href={`tel:+491736999240`}>
              <a>
                <AiOutlinePhone size={'68px'} />
                per Telefon
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
