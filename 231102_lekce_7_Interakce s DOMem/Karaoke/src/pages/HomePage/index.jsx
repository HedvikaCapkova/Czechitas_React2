import { Player } from './Player/Player';
import mp3 from '../../../public/fools-garden-lemon-tree.mp3';
import '../../global.css';

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player src={mp3} />
    </div>
  );
};
