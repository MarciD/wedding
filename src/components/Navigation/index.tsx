import Card from '../Card';

type NavigationProps = {
  slideTo: (i: number) => void;
};

const Navigation = ({ slideTo }: NavigationProps): JSX.Element => {
  return (
    <div className={'flex justify-between w-full flex-wrap'}>
      <Card>
        <h2
          className={'font-heading font-extrabold text-6xl mb-4 cursor-pointer'}
        >
          <button onClick={() => slideTo(1)}>Locations</button>
        </h2>
      </Card>

      <Card className={'border-0'}>
        <h2
          className={'font-heading font-extrabold text-6xl mb-4 cursor-pointer'}
        >
          <button onClick={() => slideTo(2)}>Zeitplan</button>
        </h2>
      </Card>

      <div
        className={'flex flex-row  justify-center text-white w-6/12 sm:w-3/12'}
      >
        <div className={'items-center justify-start'}>
          <h2
            className={
              'font-heading font-extrabold text-6xl mb-4 cursor-pointer'
            }
          >
            <button onClick={() => slideTo(3)}>Gästeinfos</button>
          </h2>
        </div>
      </div>
      <div
        className={'flex flex-row justify-center text-white  w-6/12 sm:w-3/12'}
      >
        <div className={'items-center justify-start '}>
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
  );
};

export default Navigation;
