import './btnMasAgregar.css'


import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { Loader } from '../LoaderOverlay/LoaderOverlay';


import a from "../../../../src/assets/Dashboard-almacadaques/iconBtn/mingcute_add-line.svg"

interface BtnMasAgregarProps {
  direccion: number; // Añadiendo la propiedad dirección como number
}

export const BtnMasAgregar: React.FC<BtnMasAgregarProps> = ({ direccion }) => {
  const { setLayoutID } = useContext(GlobalContext);
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = () => {
    if (direccion !== undefined) {
      setShowLoader(true);

      // Simula un redireccionamiento
      setTimeout(() => {
        setLayoutID(direccion);
      }, 1000); // Simulando una espera de 3 segundos
    }
  };

  // Oculta el loader después de 3 segundos
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showLoader) {
      timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showLoader]);
  return (
    <div className='Buton'>
      {showLoader && (
        <Loader></Loader>
      )}
      <a onClick={handleClick} href="#" className='EnlaceBton'>
        <img src={a} alt="" className='Img+' />
        Agregar
      </a>
    </div>
  );
}

