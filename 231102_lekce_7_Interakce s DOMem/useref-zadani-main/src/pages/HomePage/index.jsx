import Payment from '../../components/Payment';
import MusicPlayer from '../../components/MusicPlayer';
import StockExchange from '../../components/StockExchange';
import music from '../../assets/vlad-gluschenko-meaning.mp3';
import Stopwatch from '../../components/StopWatch/StopWatch';

export const HomePage = () => {
  return (
    <div className="container">
      {/* <Payment /> */}
      {/* <MusicPlayer src={music} /> */}
      {/* <StockExchange /> */}
      <Stopwatch />
    </div>
  );
};
