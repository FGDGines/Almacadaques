import React, { useState, useRef, useEffect } from 'react';
import { AudioPlayerProps } from '../../types/typesComponents';
import '../ItemPodcast/ItemPodcast.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faRedo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';



interface HTMLAudioElementExt extends HTMLAudioElement {
  play: () => Promise<void>;
  pause: () => void;
}



export const AudioP: React.FC<AudioPlayerProps> = ({
  fecha,
  url,
  titulo,
  autor,
  imagen,
  mostrarDatos = true,
  mostrarControles = true,
  enPodcast = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showVolumeBar, setShowVolumeBar] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElementExt;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElementExt;
      audio.pause();
      setIsPlaying(false);
    }
  };

  const play = () => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElementExt;
      audio.play();
      setIsPlaying(true);
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElementExt;
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElementExt;
      audio.currentTime = parseFloat(e.target.value);
      setCurrentTime(audio.currentTime);
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElementExt;

      audio.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElement;
      audio.volume = parseFloat(e.target.value);
    }
  };

  const handleReset = () => {
    if (audioRef.current) {
      const audio = audioRef.current as HTMLAudioElement;
      audio.currentTime = 0;
      setCurrentTime(0);
      if (isPlaying) {
        audio.play();
      }
    }
  };
  const toggleVolumeBar = () => {
    setShowVolumeBar(!showVolumeBar);
  };

  const closeVolumeBar = (e: MouseEvent) => {
    const target = e.target as Element;
    if (showVolumeBar && target !== document.getElementById('volumeIcon')) {
      setShowVolumeBar(false);
    }
  };



  return (
    <div className='fondoPodcast' >
      <img src={imagen} alt="podcast" />
      <div className='ctOverlay'>
      {enPodcast && (  // Condición para mostrar los iconos solo si está en la vista de podcast
        <div className='socialIcons'>
          <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={{ color: '#ffffff' }} />
          </a>
          <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff' }} />
          </a>
          <a href="URL_YOUTUBE" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} style={{ color: '#ffffff' }} />
          </a>
        </div>
      )}

        <div className="audioControls">
          <div className='descripcion'>
          <p className='titulo'> {titulo}</p>
          <p className='autor'>-{autor}</p>
            <p className='fecha'>{fecha}</p>
         
            
          </div>

          {mostrarControles && (
            <div>
              <audio ref={audioRef} src={url} />

              <div className="progreso">
                <span>{formatTime(currentTime)}</span>
                <input
                  className="rango"
                  type="range"
                  value={currentTime}
                  min={0}
                  max={duration || 0}
                  onChange={handleSeek}
                />
                <span>{formatTime(duration)}</span>
              </div>

              <div className="ctBoton">
                <button className='botonSecundario' onClick={handleReset}>
                  <FontAwesomeIcon icon={faRedo} />
                </button>
                <button className="button" onClick={togglePlay}>
                  {isPlaying ? (
                    <FontAwesomeIcon icon={faPause} />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} />
                  )}
                </button>
                <button className='botonSecundario' id="volumeIcon" onClick={toggleVolumeBar}>
                  <FontAwesomeIcon icon={faVolumeUp} />
                </button>
                {showVolumeBar && (
                  <input
                    className='volumeBar rango'
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    onChange={handleVolumeChange}
                  />
                )}
              </div>
            </div>
          )}


        </div>


      </div>

    </div>
  );
};


