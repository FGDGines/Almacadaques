import React from 'react';
import { AudioPlayerProps } from '../../types/typesComponents';
import '../ItemPodcast/ItemPodcast.css';

export const VideosPodcast: React.FC<AudioPlayerProps> = ({
  url,
  titulo,
}) => {
  return (
    <iframe className='fondoPodcast' src={url} title={titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
};
