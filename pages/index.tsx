import type { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { RiRoadMapFill } from 'react-icons/ri';

const registryOfficeMapsLink =
  // eslint-disable-next-line max-len
  'https://www.google.com/maps/place/Standesamt+Marzahn-Hellersdorf/@52.5371662,13.6036615,15z/data=!4m5!3m4!1s0x0:0xb23ad5e03218232e!8m2!3d52.5371662!4d13.6036615';

const Home: NextPage = () => {
  return (
    <>
      <video
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
        controls={false}
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
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Wir bitten um Zusagen!</h1>
          <p>
            Bitte gebt uns bis spätestens <b>04.08.2022</b> Bescheid ob Ihr
            kommt oder nicht.
          </p>
          <p className={'my-4'}>(Mit Namen und Alter)</p>
          <p>
            Das geht ganz einfach per Klick auf eines der unteren Symbole 😉
          </p>
          <div className={'inline-flex-space'}>
            <Link
              href={`https://wa.me/491736999240?text=${encodeURI(
                // eslint-disable-next-line max-len
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
      <div className="view">
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Wir Trauen uns</h1>
          <p>...um 12:30Uhr im Standesamt Helle Mitte.</p>
          <p className={'my-4'}>
            Wer dabei sein möchte soll sich bitte um 12:00Uhr vor dem Standesamt
            befinden.
          </p>
          <p>Bei der Trauung selbst sind die Plätze jedoch begrenzt.</p>
          <p className={'my-4'}>
            Alice-Salomon-Platz 3<br /> 12627 Berlin
          </p>
          <div className={'inline-flex-space'}>
            <Link href={registryOfficeMapsLink}>
              <a>
                <RiRoadMapFill size={'68px'} />
                Auf Google Map&lsquo;s
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
