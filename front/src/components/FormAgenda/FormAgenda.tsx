import React, { FC, useState } from 'react';


import './FormAgenda.css'
import { tpFormAgenda } from '../../types/typesComponents';

const FormAgenda: FC<tpFormAgenda> = ({actividades}) => {
  
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
    
    console.log('Datos enviados:', formData);
  };


  return (
    <div className='FormAgenda'>
      <h1>Inscribirse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="actividad">Actividad:</label>
          <select
            id="actividad"
            name="actividad"
            required
            value={formData.actividad}
            onChange={handleChange}
          >
            <option value="">Selecciona una actividad</option>
            {actividades.map((item )=>{
              const { id, title } =  item 
              return <option key={id} value={`${id}`}>{title}</option>
            })}
          </select>
        </div>

        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default FormAgenda;
