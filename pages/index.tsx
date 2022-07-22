import type { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { RiRoadMapFill } from 'react-icons/ri';

const spreespeicherMapsLink =
  // eslint-disable-next-line max-len
  'https://www.google.com/maps/place/Capitol+Yard+Golf+Lounge/@52.5018045,13.4489895,15z/data=!4m2!3m1!1s0x0:0xb8680625eface940?sa=X&ved=2ahUKEwiXmfTC94n5AhVAnP0HHR1-D9AQ_BJ6BAhhEAU';
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
            Bitte gebt uns bis spätestens <b>04.08.2022</b> Bescheid, ob Ihr
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
          <p>...um 12:30 Uhr im Standesamt Helle Mitte.</p>
          <p className={'my-4'}>
            Wer dabei sein möchte, soll sich bitte um 11:30 Uhr vor dem
            Standesamt einfinden. Um 12:30 Uhr ist die Trauung vor der
            Standesbeamtin.
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
      <div className="view">
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Wir feiern mit euch</h1>
          <p> im Spreespeicher Berlin.</p>
          <p className={'mb-4'}>
            Einlass ist ab 15:00 Uhr mit Sektempfang und Canapés.
          </p>
          <p className={'mb-4'}>
            Für unser leibliches Wohl ist selbstverständllich gesorgt.
          </p>
          <p className={'my-4'}>
            Stralauer Allee 2,
            <br /> 10245 Berlin,
            <br /> Eingang 2B, Capitol Yard Golf Lounge
          </p>
          <div className={'inline-flex-space'}>
            <Link href={spreespeicherMapsLink}>
              <a>
                <RiRoadMapFill size={'68px'} />
                Auf Google Map&lsquo;s
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="view">
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Zeitplan - Standesamt</h1>
          <ul>
            <li className={'mb-2'}>11:30 Uhr - Treffen vor dem Standesamt</li>
            <li className={'mb-2'}>12:30 Uhr - Trauung im Standesamt</li>
            <li className={'mb-2'}>
              13:00 Uhr - Sektempfang vor dem Standesamt
            </li>
          </ul>
        </div>
      </div>
      <div className="view">
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Zeitplan - Spreespeicher</h1>
          <ul>
            <li className={'mb-2'}>
              ab 15:00 Uhr - Einlass mit Sektempfang und Canapés
            </li>
            <li className={'mb-2'}>18:00 Uhr - BBQ</li>
            <li className={'mb-2'}>20:00 Uhr - Tanz und Feierei</li>
            <li className={'mb-2'}>23:30 Uhr - Letzter Gong</li>
            <li className={'mb-2'}>00:30 Uhr - Ende</li>
          </ul>
        </div>
      </div>
      <div className="view">
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Wissenswertes</h1>
          <h2>Dresscode</h2>
          <p className={'mb-4'}>Abendgarderobe! </p>
          <p>
            Um ein rotes Accessoire wird gebeten (Blume, Schlips, Kleid etc.)
            <br />
            <br />
            Unser größtes Geschenk ist es, mit euch zu feiern!
            <br />
            <br /> Wenn ihr uns zusätzlich eine Freude machen wollt, danken wir
            euch herzlich für einen Beitrag zu unseren Flitterwochen.
          </p>
        </div>
      </div>
      <div className="view">
        <div className="main-text-wrapper max-width-460">
          <h1 className={'mb-8'}>Rückfragen</h1>
          <p className={'mb-6'}>
            Bei Rückfragen könnt Ihr euch gerne an folgende Personen wenden:
          </p>
          <ul>
            <li className={'mb-4'}>
              <Link href={'tel:+4917613745281'}>
                <a>Sandra - 0176 / 13745281</a>
              </Link>
            </li>
            <li>
              <Link href={'tel:+4917667831490'}>
                <a>Steffi - 0176 / 67831490</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
