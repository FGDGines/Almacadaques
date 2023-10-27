import { useEffect, useMemo, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { ImLoop } from "react-icons/im";
import { Duration } from "./Duration";
import './ItemPodcast.css'

type Props = {
  playerRef: any;
  playing: boolean;
  loop: boolean;
  volume: number;
  muted: boolean;
  progress: number;
  duration: number;

  handlePlay: () => void;
  toggleMute: () => void;
  toggleLoop: () => void;
  handlePause: () => void;
  handleVolumeChange: (newVolume: number) => void;
};
export const PlayerControls = ({
  playerRef,
  loop,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}: Props) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const togglePlayAndPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleSeekMouseDown = (e: any) => {
    setSeeking(true);
  };

  const handleSeekChange = (e: any) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: any) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  };

  const handleChangeInVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(Number(e.target.value));
  };

  useMemo(() => {
    setPlayed((prevPlayed) => {
      if (!seeking && prevPlayed !== progress) {
        return progress;
      }
      return prevPlayed;
    });
  }, [progress, seeking]);

  // shifts focus to play button on component mount
  useEffect(() => {
    playPauseButtonRef.current?.focus();
  }, []);

  return (
      <div className="contenedorPrincipal">

        <div className="containerWhite">
        <div className="barraDeProgreso">
          {/* Duración: tiempo transcurrido */}
          <div className="duracionTranscurrida">
            <Duration seconds={duration * played} />
          </div>
    
          {/* Barra de progreso horizontal */}
          <div className="barraHorizontal">
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              className=" "
            />
          </div>
    
          {/* Duración: tiempo restante */}
          <div className="duracionRestante">
            <Duration seconds={duration * (1 - played)} />
          </div>
        </div>
    
        <div className="controles">
          {/* Botón de bucle */}
          <div >
            <button
            
              className={` ${loop && ""} botonDeBucle button_slide slide_down `}
              onClick={toggleLoop}
            >
              <ImLoop />
            </button>
          </div>
    
          {/* Botón de reproducción/pausa */}
          <div>
            <button
              ref={playPauseButtonRef}
              className="botonReproducirPausar button_slide slide_down"
              onClick={togglePlayAndPause}
            >
              {playing ? <CiPause1 /> : <CiPlay1 />}
            </button>
          </div>
    
          {/* Contenedor de control de volumen */}
          <div className="contenedorDeVolumen">
            {/* Botón de silencio */}
            <div >
              <button
                className="botonDeSilencio button_slide slide_down"
                onClick={toggleMute}
              >
                {muted ? <VscMute /> : <VscUnmute />}
              </button>
            </div>
    
            {/* Control de volumen */}
            <input
              type="range"
              className="controlDeVolumen"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={handleChangeInVolume}
            />
          </div>
        </div>
        </div>
       
      </div>
  );
};
