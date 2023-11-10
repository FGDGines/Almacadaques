import './btnMasAgregar.css'


import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';

interface BtnMasAgregarProps {
  direccion: number; // Añadiendo la propiedad dirección como number
}

export const BtnMasAgregar: React.FC<BtnMasAgregarProps> = ({ direccion }) => {
  const { setLayoutID } = useContext(GlobalContext);

  const handleClick = () => {
    setLayoutID(direccion);
  };

  return (
    <div className='Buton'>
      <a onClick={handleClick} href="#" className='EnlaceBton'>
        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/mingcute_add-line.svg" alt="" />
        Agregar
      </a>
    </div>
  );
}

