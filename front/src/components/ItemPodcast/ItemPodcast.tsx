import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { AudioPlayerProps } from '../../types/typesComponents';
import '../ItemPodcast/ItemPodcast.css';

export const VideosPodcast: React.FC<AudioPlayerProps> = ({
  fecha,
  url,
  titulo,
  autor,
  enPodcast = true
}) => {
  return (
    <iframe className='fondoPodcast' src={url} title={titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
};
