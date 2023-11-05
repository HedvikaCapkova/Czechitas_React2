import React, { useRef, useState } from 'react';
import '../../../global.css';

export const Player = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();
  const handleClick = () => {
    setPlaying(!playing);
    playing ? playerRef.current.pause() : playerRef.current.play();
  };

  return (
    <div>
      <audio
        src={src}
        ref={playerRef}></audio>
      <div class="player-controls">
        <button
          class={`play-button play ${playing ? 'pause' : 'play'}`}
          onClick={handleClick}></button>
      </div>
    </div>
  );
};
