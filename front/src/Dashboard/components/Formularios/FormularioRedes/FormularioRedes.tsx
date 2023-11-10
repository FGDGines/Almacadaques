import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { SubirArchivos } from '../../subirArchivos/subirArchivos';
import React, { useState } from 'react';
import { redes as datosRedes } from '../../../../data/redes';

interface RedesFormProps {
  onGuardarRedes: (redes: any[]) => void;
}

export const FormularioRedes: React.FC<RedesFormProps> = ({ onGuardarRedes }) => {
  const [archivos, setArchivos] = useState<FileList | null>(null);
  const [url, setUrl] = useState('');
  const [cuenta, setCuenta] = useState('');

  const handleArchivosSubidos = (archivos: FileList | null, identificador: string) => {
    setArchivos(archivos);
  };

  const agregarNuevaRed = () => {
    if (!archivos) {
      console.error('Debe seleccionar un archivo.');
      return;
    }

    const nuevaRed = {
      icon: URL.createObjectURL(archivos[0]),
      url,
      cuenta,
    };

    // Actualizamos el array de datosRedes
    datosRedes.push(nuevaRed);

    // Llamamos a la función proporcionada por el componente padre con el nuevo array de redes
    if (typeof onGuardarRedes === 'function') {
      onGuardarRedes([...datosRedes]); // Evitar modificar el array original directamente
    } else {
      console.error('onGuardarRedes no es una función');
    }

    // Limpiamos los campos después de guardar
    setArchivos(null);
    setUrl('');
    setCuenta('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    agregarNuevaRed();
  };

  return (
    <div className='formularioRedes'>
      <NarbarAdmin />

      <div className="contenidoFormRedes">
        <h2>Formulario de Redes</h2>
        <form onSubmit={handleSubmit}>
          <SubirArchivos onArchivosSubidos={handleArchivosSubidos} identificador="redes" />

          <label>URL:</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

          <label>Cuenta:</label>
          <input type="text" value={cuenta} onChange={(e) => setCuenta(e.target.value)} />

          <button type="submit">Guardar Redes</button>
        </form>
      </div>
    </div>
  );
};
 