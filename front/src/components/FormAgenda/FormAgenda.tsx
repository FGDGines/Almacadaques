import React, { FC, useContext, useState } from 'react';


import './FormAgenda.css'
import { tpDtmResponse, tpFormAgenda } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';

const FormAgenda: FC<tpFormAgenda> = ({actividades}) => {
  
  const { languageFlag } = useContext(GlobalContext)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    actividad: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.actividad)
    const data = {body: JSON.stringify({
      nombre: formData.nombre,
      correo: formData.correo,
      msg: `telefono: ${formData.telefono}, actividad: ${formData.actividad}`,
      fragment: "experiencias de bienestar"
    })}
    fetchDefault("/mail/create", data, (d: tpDtmResponse) => {
      if (d.status == 200) {
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          actividad: '',
        })
      }
      mostrarAlerta(d)
  })
    
    // console.log('Datos enviados:', formData);
  };


  return (
    <div className='FormAgenda'>
      <h1>{textos[languageFlag].inscribirse}</h1>
      <form onSubmit={handleSubmit} className='mt-1'>
        <div>
          <label htmlFor="nombre">{textos[languageFlag].textnombre}:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange} 
          />
        </div>
        <div className='mt-1'>
          <label htmlFor="correo">{textos[languageFlag].textemail}:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
            value={formData.correo}
            onChange={handleChange}
            placeholder='@almacadaqués.com'
          />
        </div>
        <div className='mt-1'>
          <label htmlFor="telefono">{textos[languageFlag].textocontactartelf}:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className='mt-1'>
          <label htmlFor="actividad">{textos[languageFlag].actividad}:</label>
          <select
            id="actividad"
            name="actividad"
            required
            value={formData.actividad}
            onChange={handleChange}
          >
            <option value="">{textos[languageFlag].actSelect}</option>
            {actividades.map((item )=>{
              const { id, title } =  item 
              return <option key={id} value={`${title}`}>{title}</option>
            })}
          </select>
        </div>

        <div className='mt-1'>
          <button className='boton' type="submit">{textos[languageFlag].expBieBtn}</button>
        </div>
      </form>
    </div>
  );
};

export default FormAgenda;
