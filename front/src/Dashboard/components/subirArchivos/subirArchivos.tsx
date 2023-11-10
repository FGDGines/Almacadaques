// SubirArchivos.tsx
import React from 'react';
import { redes as datosRedes } from '../../../data/redes';

interface SubirArchivosProps {
  onArchivosSubidos: (archivos: FileList | null, identificador: string) => void;
  identificador: string;
}

export const SubirArchivos: React.FC<SubirArchivosProps> = ({ onArchivosSubidos, identificador }) => {
  const handleArchivoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = event.target.files;

    // Actualizamos el ícono de la primera red si hay archivos
    if (archivos && archivos.length > 0) {
      // Suponemos que datosRedes es un array
      if (Array.isArray(datosRedes) && datosRedes.length > 0) {
        datosRedes[0].icon = URL.createObjectURL(archivos[0]);
        // Otras actualizaciones necesarias en datosRedes
      }
    }

    // Llamamos a la función proporcionada por el componente padre
    onArchivosSubidos(archivos, identificador);
  };

  return (
    <div>
      <label>Subir Archivos:</label>
      <input type="file" onChange={handleArchivoChange} accept="image/*,video/*" multiple />
    </div>
  );
};
